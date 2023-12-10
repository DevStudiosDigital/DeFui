import border_card from "../../public/border_card.png";
import chart from "../../public/chart.png";
import arrow_right from "../../public/arrow_right.png";
import styles from "./DelotsCard.module.css"; // Import the CSS module
import { ProgressCircle } from "../progress-circle/ProgressCircle";

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

import Web3 from 'web3';

import { abi, abiStable, abiErc20 } from '../../pages/mint/assets'

export const DelotsCard = ({
  title,
  icon,
  symbol,
  tickets_title,
  button_title,
  video,
  providerUrl,
  contractAddress,
  url,
  stable
}) => {

  const [ticketsAvailable, setTicketsAvailable] = useState('-');
  const [ticketsPercent, setTicketsPercent] = useState(0);
  const [amount, setAmount] = useState('-')

  const navigate = useNavigate();

  const handleButtonClick = () => {
    // Navigate to a different route
    if (stable) {
      navigate('/mint-stable/' + title);
    }
    else { 
      navigate('/mint/' + title);
    }
    
  };

  const loadWeb3 = async () => {

      const web3 = new Web3(providerUrl); //NOTE: WE WILL HAVE TO REPLACE THIS.

      var contract;
      if (stable) {
        contract = new web3.eth.Contract(abiStable, contractAddress);
      }
      else {
        contract = new web3.eth.Contract(abi, contractAddress);
      }
      
      console.log(contract)

      const maxSale = parseInt(await contract.methods.maxSalePlusOne().call()) - 1
      console.log('Max Sale: ', maxSale)

      const totalSupply = parseInt(await contract.methods.totalSupply().call())
      console.log('Total Supply: ', totalSupply)
      
      setTicketsAvailable(maxSale - totalSupply)

      setTicketsPercent((((maxSale - totalSupply) / maxSale) * 100).toFixed(2))

      var tokenPrice = parseInt(await contract.methods.tokenPrice().call())
      console.log('Token Price: ', tokenPrice)

      if (stable) {
        const erc20Address = await contract.methods.ERC20Token().call()
        console.log(erc20Address)

        const contractStable = new web3.eth.Contract(abiErc20, erc20Address);
        console.log(contractStable)

        const decimals = parseInt(await contractStable.methods.decimals().call())
        console.log('Decimals: ', decimals)

        setAmount(tokenPrice / 10 ** decimals)
      }
      else {
        tokenPrice = web3.utils.fromWei(tokenPrice.toString(), 'ether')
        setAmount(tokenPrice)
      }
      
      


  }

  useEffect(() => {
    if (contractAddress && !url) {
      loadWeb3()
    }
  }, [])

  return (
    <div
    className={`${styles.cardContainer}`} // Use the CSS module class
    style={{
        backgroundImage: `url(${border_card})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <div className="py-3 text-base sm:text-xl font-bold flex items-center justify-center gap-3">
        <img src={icon} alt="icon delots" />
        <span>{title}</span>
      </div>
      <div className="flex border-y border-white/40 flex-1">
        {contractAddress ? <div className="flex py-4 w-full flex-col gap-2 items-center justify-center border-r border-white/40">
          <div className="font-bold sm:text-base text-xs">{'Jackpot amount (' + symbol + ')'}</div>
          <div className="text-accent-color text-lg sm:text-2xl font-bold">{amount}</div>
        </div> :
        <div className="flex py-4 w-full flex-col gap-2 items-center justify-center border-r border-white/40">
          <div className="font-bold sm:text-base text-xs">{'Jackpot amount (' + symbol + ')'}</div>
          <div className="flex items-center gap-1 sm:gap-2 text-lg sm:text-2xl">
            <div className="mr-2 sm:mr-4">-</div>
        </div>
        </div> }
        <div className="flex py-4 w-full flex-col gap-2 items-center justify-center">
          <div className="font-bold sm:text-base text-xs">{tickets_title}</div>
          {contractAddress ? <div className="flex items-center gap-1 sm:gap-2 text-lg sm:text-2xl">
            <div className="mr-2 sm:mr-4">{ticketsAvailable}</div>
            <div className="flex items-center gap-2">
              <ProgressCircle percent={ticketsPercent} />
              {ticketsPercent}%
            </div>
          </div> : 
          <div className="flex items-center gap-1 sm:gap-2 text-lg sm:text-2xl">
            <div className="mr-2 sm:mr-4">-</div>
        </div>}
        </div>
      </div>
      {contractAddress ? <button className="py-3 flex items-center justify-center gap-4 w-full  text-lg font-bold hover:bg-white/10" onClick={handleButtonClick}>
        <span>{button_title}</span>
        <img src={arrow_right} alt="" />
      </button> :
      <button className="py-3 flex items-center justify-center gap-4 w-full  text-lg font-bold hover:bg-white/10">
        <span>Coming Soon</span>
      </button>
      }

      {/* Hover effect styles */}
      <style jsx>{`
        .aspect-[4/1]:hover {
          box-shadow: 0px 4px 20px rgba(221, 2, 141, 0.2); /* Box shadow with the color #dd028d */
          border: 2px solid #dd028d; /* Border with the color #dd028d */
        }
      `}</style>
    </div>
  );
};
