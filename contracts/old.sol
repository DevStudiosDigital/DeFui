// SPDX-License-Identifier: MIT
pragma solidity ^0.8.1;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

contract DeLot is ERC721, Ownable, ReentrancyGuard, VRFConsumerBase {
    uint256 public constant MAX_NFTS = 6969;
    uint256 public constant NUM_WINNERS = 10;
    uint256 public constant WINNING_SHARE = 69; // 6.9%
    uint256 public constant TEAM_SHARE = 103; // 31% / 3
    uint256 public constant CHARITY_SHARE = 103;
    uint256 public constant COMMUNITY_SHARE = 103;

    uint256 public nftPrice = 16.9 ether;
    uint256 public maxNftsPerTransaction = 20;

    uint256 public totalMinted;

    uint256 public randomResult;
    uint256[] public winningNumbers;

    bytes32 internal keyHash;
    uint256 internal fee;

    address public teamWallet;
    address public charityWallet;
    address public communityWallet;

    mapping (uint256 => bool) private _burnedTokens;
    mapping (uint256 => string) private _tokenURIs;

    event WinnerSelected(uint256 indexed tokenId, address indexed winner);

    constructor(address _teamWallet, address _charityWallet, address _communityWallet, address _vrfCoordinator, address _linkToken, bytes32 _keyHash)
        ERC721("DeLot", "DELOT")
        VRFConsumerBase(_vrfCoordinator, _linkToken)
    {
        teamWallet = _teamWallet;
        charityWallet = _charityWallet;
        communityWallet = _communityWallet;
        keyHash = _keyHash;
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    function mintNFT(uint256 _numNfts, string memory _tokenURI) external payable nonReentrant {
        require(totalMinted + _numNfts <= MAX_NFTS, "Exceeds max NFTs");
        require(nftPrice * _numNfts <= msg.value, "Insufficient payment");
        require(_numNfts <= maxNftsPerTransaction, "Exceeds max NFTs per transaction");

        for (uint256 i = 0; i < _numNfts; i++) {
            if (totalMinted < MAX_NFTS) {
                uint256 tokenId = totalMinted + 1;
                _safeMint(msg.sender, tokenId);
                _setTokenURI(tokenId, _tokenURI);
                totalMinted = tokenId;
            }
        }
    }

    function drawWinners() external onlyOwner {
        require(totalMinted == MAX_NFTS, "Not all NFTs minted");
        require(LINK.balanceOf(address(this)) >= fee, "Not enough LINK");
        requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 /* requestId */, uint256 randomness) internal override {
        randomResult = randomness;

        for (uint256 i = 0; i < NUM_WINNERS; i++) {
            uint256 winningNumber;
            do {
                winningNumber = (randomResult % MAX_NFTS)+(1);
                randomResult /= MAX_NFTS;
            } while (_burnedTokens[winningNumber]);
            winningNumbers.push(winningNumber);
        }

        distributePrizes();
        burnAllNFTs();
    }

    function distributePrizes() private {
        uint256 totalRevenue = nftPrice * MAX_NFTS;
        uint256 winnerShare = totalRevenue * WINNING_SHARE / 1000;
        uint256 teamShare = totalRevenue * TEAM_SHARE / 1000;
        uint256 charityShare = totalRevenue * CHARITY_SHARE / 1000;
        uint256 communityShare = totalRevenue * COMMUNITY_SHARE / 1000;

        for (uint256 i = 0; i < NUM_WINNERS; i++) {
            address winner = ownerOf(winningNumbers[i]);
            payable(winner).transfer(winnerShare);
            emit WinnerSelected(winningNumbers[i], winner);
        }

        payable(teamWallet).transfer(teamShare);
        payable(charityWallet).transfer(charityShare);
        payable(communityWallet).transfer(communityShare);
    }

    function burnAllNFTs() private {
        for (uint256 i = 1; i <= MAX_NFTS; i++) {
            _burnedTokens[i] = true;
        }
        totalMinted = 0;
    }

    function setNftPrice(uint256 _nftPrice) external onlyOwner {
        nftPrice = _nftPrice;
    }

    function setMaxNftsPerTransaction(uint256 _maxNftsPerTransaction) external onlyOwner {
        maxNftsPerTransaction = _maxNftsPerTransaction;
    }

    function setWallets(address _teamWallet, address _charityWallet, address _communityWallet) external onlyOwner {
        teamWallet = _teamWallet;
        charityWallet = _charityWallet;
        communityWallet = _communityWallet;
    }

    function withdrawLink() external onlyOwner {
        require(LINK.transfer(msg.sender, LINK.balanceOf(address(this))), "Failed to transfer LINK");
    }

    function _setTokenURI(uint256 tokenId, string memory _tokenURI) internal virtual {
        require(_exists(tokenId), "ERC721Metadata: URI set of nonexistent token");
        _tokenURIs[tokenId] = _tokenURI;
    }

    function tokenURI(uint256 tokenId) public view virtual override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
        string memory _tokenURI = _tokenURIs[tokenId];

        // If there is no base URI, return the token URI.
        if (bytes(_tokenURI).length == 0) {
            return _tokenURI;
        }

        // If both are set, concatenate the baseURI and tokenURI (via abi.encodePacked).
        return string(abi.encodePacked(_tokenURI));
    }
}