import { MintBg } from "../../components/MintBg";
import mint_2 from "../../public/mint_2.png";
import logo from "../../public/logo-1.png";
import arrow_left from "../../public/arrow_left.png";
import ellipse from "../../public/Ellipse 26.png";
import header__btn from "../../public/header__btn.png";
import btn__mint from "../../public/btn__mint.png";
import bg_min from "../../public/bg_min.png";
import cronos from "../../public/cronos.png";
import video from "../../public/video.mp4";
import { chains } from "../flow/flow.data";

import { LinesBg } from "../../components/LinesBg";
import { BgSpot } from "../../components/BgSpot";
import { Button } from "../../components/Button";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import Web3 from 'web3';

import { getAccount, watchAccount  } from '@wagmi/core'

import { abi } from './assets'

import { prepareWriteContract, writeContract } from '@wagmi/core'

import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

export const Mint = () => {
    const [web3, setWeb3] = useState()
    const [contract, setContract] = useState()
    const [minted, setMinted] = useState('-');
    const [supply, setSupply] = useState('-')
    const [price, setPrice] = useState('-')
    const [amount, setAmount] = useState(1)
    

    const account = getAccount()
    const unwatch = watchAccount((account) => updateConnected(account))
    const [connected, setConnected] = useState(account.isConnected)

    const { param1 } = useParams();
    const chainData = chains.find(chain => chain.title === param1);

    

    const updateConnected = (account) => {
      if (account.isConnected) {
        setConnected(true)
      }
      else {
        setConnected(false)
      }
      
    }

    const loadWeb3 = async () => {
      if (chainData) {
        console.log(chainData)

        const web3 = new Web3(chainData.providerUrl); //NOTE: WE WILL HAVE TO REPLACE THIS.
        setWeb3(web3)

        const contract = new web3.eth.Contract(abi, chainData.contractAddress);
        console.log(contract)
        setContract(contract)

        const maxSale = parseInt(await contract.methods.maxSalePlusOne().call()) - 1
        console.log('Max Sale: ', maxSale)
        setSupply(maxSale)

        const totalSupply = parseInt(await contract.methods.totalSupply().call())
        console.log('Total Supply: ', totalSupply)
        setMinted(totalSupply)

        var tokenPrice = parseInt(await contract.methods.tokenPrice().call())
        console.log('Token Price: ', tokenPrice)
        tokenPrice = web3.utils.fromWei(tokenPrice.toString(), 'ether')
        setPrice(tokenPrice)

    }

    }

    const mint = async () => {
      if (!connected) {
        alert("Connect Your Wallet First!")
      }
      else {

        const contract = new web3.eth.Contract(abi, chainData.contractAddress);
        console.log(contract)
        setContract(contract)

        const contractState = parseInt(await contract.methods.contractState().call())
        if (contractState == 0) {
          alert('Lottery Is Not Open!')
          return
        }
        
        if (minted + parseInt(amount) > supply) {
          alert('Exceeds Available Amount!')
          return
        }

        var valueToSend = web3.utils.toWei(price, 'ether');
        valueToSend = valueToSend * amount;

        const config  = await prepareWriteContract({
          address: chainData.contractAddress,
          abi: abi,
          functionName: 'mint',
          args: [account.address, amount],
          value: valueToSend
        })

        try {
          // Attempt to execute the contract function
          const { hash } = await writeContract(config);
          console.log('Contract function executed successfully');

          await waitForConfirmation(hash, 1)

          await loadWeb3();

        } catch (error) {
          // If there is an error during contract execution, handle it here
          console.error('Error executing contract function:', error);
          // You can also show an error message to the user or perform any other error handling logic
        }

      }
    }

    async function waitForConfirmation(transactionHash, confirmations) {
      let receipt;
      while (true) {
        try {
          receipt = await web3.eth.getTransactionReceipt(transactionHash);
          if (receipt && receipt.blockNumber) {
            const currentBlock = await web3.eth.getBlockNumber();
            const confirmationsCount = currentBlock - receipt.blockNumber;
            
            if (confirmationsCount >= confirmations) {
              console.log(`Transaction confirmed with ${confirmations} confirmations.`);
              break;
            } else {
              console.log(`Transaction currently has ${confirmationsCount} confirmations. Waiting...`);
            }
          } else {
            console.log('Transaction is still pending. Waiting...');
          }
        } catch (error) {
          console.error('Error checking transaction receipt:', error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second before checking again
      }
    }

    // Handler to add 1 to the amount
    const addHandler = () => {
      setAmount(amount + 1);
    };

    // Handler to subtract 1 from the amount, but not below 1
    const subtractHandler = () => {
      if (amount > 1) {
        setAmount(amount - 1);
      }
    };

    useEffect(() => {
      if (!web3) {
        loadWeb3()
      }
    }, [])

  return (
    <div className="flex lg:flex-row flex-col min-h-screen h-full bg-black text-white">
      <div className="border-r-2 border-white lg:max-w-[45%] w-full flex flex-col">
        <MintBg >
        {chainData ? (
            <video className="object-cover object-left h-full" autoPlay muted loop>
              <source type="video/mp4" src={chainData.video} />
            </video>
          ) : (
            <video className="object-cover object-left h-full" autoPlay muted loop>
              <source type="video/mp4" src={video} />
            </video>
          )}
          {/* <img src={mint_2} alt="main image" className="object-contain sm:h-full w-[50%]  py-12" /> */}
          <img
            src={logo}
            alt="logo image"
            className="object-contain absolute top-4 left-4 sm:w-fit w-16 "
          />
          {/* <button className="object-contain absolute top-4 w-[40%] right-4 lg:hidden">
                  <img src={header__btn} alt="button" />
                </button> */}
          
        </MintBg>
        <div className="h-28 flex border-b-2 border-white">
          <Link to="/chains" className="hidden uppercase hover:opacity-60 transition-opacity items-center gap-4 text-white h-full mx-auto lg:flex">
            <img src={arrow_left} alt="arrow_left_assets" />
            <span>back to dapp</span>
          </Link>
          <div className="text-white w-full lg:w-fit uppercase px-5 sm:px-10 border-r-2 lg:border-r-0 lg:border-x-2 border-white flex flex-col gap-1 text-lg sm:text-2xl font-bold justify-center ">
            <p>minted</p>
            <p>
              {minted}/<span className="text-accent-color">{supply}</span>
            </p>
          </div>
          <div className="text-white w-full lg:w-fit uppercase px-5 sm:px-10 lg:border-x-2 border-white flex flex-col gap-1 text-lg sm:text-2xl font-bold justify-center ">
            <p>Price</p>
            <p>
              {price}{chainData ? <span className="text-accent-color">{chainData.symbol}</span> : <span className="text-accent-color"></span>}
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden w-full relative pt-10 ">
        <LinesBg>
          <BgSpot
            className={"-top-96 sm:-top-20 -right-96 sm:-right-96 w-[1200px] h-[1000px] max-w-none"}
            ellipse={ellipse}
          />
        </LinesBg>
        <div className="relative z-0 flex flex-col">
          {/* <button className="ml-auto mt-10 mr-5 lg:block hidden">
            <img src={header__btn} alt="button" />
          </button> */}
          <div className="md:block hidden">
          
          <Fade right>
          <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button className={"ml-auto  mr-5 lg:block hidden"} img={header__btn} onClick={openConnectModal}  />
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} className="connect-wallet__btn border title ml-auto  uppercase mr-5 lg:block hidden border-white px-10 text-2xl py-2 w-fit rounded-full hover:bg-white hover:text-black ">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/*<button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'right' }}
                    className="connect-wallet__btn border title ml-auto  uppercase mr-5 lg:block hidden border-white px-10 text-xl py-2 w-fit rounded-full hover:bg-white hover:text-black "
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>*/}

                  <button onClick={openAccountModal} className="connect-wallet__btn border title ml-auto  uppercase mr-5 lg:block hidden border-white px-10 text-2xl py-2 w-fit rounded-full hover:bg-white hover:text-black ">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                    
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>

          </Fade>
          </div>
          <div className="lg:px-20 px-5 sm:px-10 flex flex-col justify-center gap-10">
          <div className="md:hidden block mt-[-50px]">
            
          <Fade right>
          <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== 'loading';
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus ||
            authenticationStatus === 'authenticated');

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              'style': {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button className={"ml-auto mt-10 mr-5 "} img={header__btn} onClick={openConnectModal}  />
                );
              }

              if (chain.unsupported) {
                return (
                  <button onClick={openChainModal} className="connect-wallet__btn border title ml-auto  uppercase mr-5  border-white px-10 text-2xl py-2 w-fit rounded-full hover:bg-white hover:text-black ">
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/*<button
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'right' }}
                    className="connect-wallet__btn border title ml-auto  uppercase mr-5 lg:block hidden border-white px-10 text-xl py-2 w-fit rounded-full hover:bg-white hover:text-black "
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? 'Chain icon'}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </button>*/}

                  <button onClick={openAccountModal} className="connect-wallet__btn border title ml-auto  uppercase mr-5  border-white px-10 text-2xl py-2 w-fit rounded-full hover:bg-white hover:text-black ">
                    {account.displayName}
                    {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''}
                    
                  </button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>

          </Fade>
          </div>
            <Fade top>
            <h1 className="font-racing text-4xl sm:text-6xl lg:text-9xl">mint your ticket</h1>

              </Fade>
            <ul className="list-disc ml-8 font-medium text-lg sm:text-xl">
             <Fade left>
             <li>
                Mint your NFTk for a chance to win a share of the Jackpot! Increase your odds by
                minting up to 25 tickets!{" "}
              </li>
             </Fade>
             <Fade left>
              <li>
                5 winners will be selected to share 69% of the total revenue. See the Whitepaper for
                more details
              </li>
              </Fade>
            </ul>
            <div className="flex border-2 border-white h-10 w-fit">
              <button className="w-10 hover:opacity-60 transition-opacity flex justify-center items-center h-full shrink-0" onClick={subtractHandler}>
                <span className="text-5xl mb-2">-</span>
              </button>
              <div className="w-12 flex justify-center items-center h-full shrink-0 border-x-2 border-white">
                <span className="text-2xl">{amount}</span>
              </div>
              <button className="w-10 hover:opacity-60 transition-opacity flex justify-center items-center h-full shrink-0 bg-accent-color text-9xl leading-3" onClick={addHandler}>
                <span className="text-5xl mb-2">+</span>
              </button>
            </div>
            {/* <button className="sm:w-fit w-48">
              <img src={btn__mint} alt="btn__mint" />
            </button> */}
            <Fade bottom>
            <Button img={btn__mint} onClick={mint} disabled={!connected}/>
              </Fade>

            <Fade bottom>
                <CrossmintPayButton
                  collectionId={chainData.collectionId}
                  projectId={chainData.projectId}
                  mintConfig={{"type":"erc-721","totalPrice": (price * amount).toString(),"quantity": amount}}
                  environment="staging"
                  mintTo={account.address}
                  getButtonText={(connecting, paymentMethod) =>
                    connecting ? "CONNECTING" : `MINT WITH CREDIT CARD`
                  }
                  style={{backgroundColor: '#F6019D',
                  color: '#ffffff',
                  padding: '20px 30px',
                  marginLeft: '18px',
                  border: '2px solid white',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  fontSize: '20px',
                }}

              />
            </Fade>

              
   
     
          </div>
          <Link to="/flow" className="flex items-center hover:opacity-60 transition-opacity gap-4 uppercase text-white h-full w-full justify-center lg:hidden mt-32 py-5 border-t-2 border-white">
            <img src={arrow_left} alt="arrow_left_assets" />
            <span>back to dapp</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
