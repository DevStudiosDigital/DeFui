import { BgSpot } from "../../../../components/BgSpot";
import { Header } from "../../../../components/header/Header";
import btn_2 from "../../../../public/delot/btn_02.png";
import ellipse_03 from "../../../../public/delot/ellipse_03.png";
import nft_ticket from "../../../../public/delot/NFTk Tiket_00029 1.png";
import nft_ticket_2 from "../../../../public/delot/NFTk Tiket_00029 2.png";
import nft_ticket_3 from "../../../../public/delot/image 34.png";
import { Cardpan } from "../cards/Cardpan/Cardpan";
import { Button } from "../../../../components/Button";
import Fade from 'react-reveal/Fade'; 
import { useNavigate } from 'react-router-dom';


export const Introducing = () => {


  const navigate = useNavigate();
  
  const handleButtonClick = () => {
    // Use navigate to go to another page
    navigate('/chains');
  };

  return (
    <section className="pt-20">
      <Header title="DeLot & NFTks" subtitle="Introducing" />
     <Fade bottom>
     <div style={{ zIndex: 1 }} className="py-10 px-5 sm:px-10 md:px-20 relative">
        <div className="font-medium text-center text-lg sm:text-xl md:px-20 xl:px-40 2xl:px-52">
        Decentralize the Future's flagship project, DeLot, transforming the NFT experience. Instead of the uncertain chase for elusive high-value assets, DeFui's NFTks offer a refined way to find those hidden 100x gems. Win the raffle and embark on a journey to find these rare and valuable treasures, making every draw a potential 100x gem opportunity
        </div>
      </div>
     </Fade>
     
      <div className="relative ">
        <BgSpot
          style={{ zIndex: 0 }}
          className={
            "-translate-x-1/2 md:-translate-x-1/3 top-1/4 md:top-0 lg:-top-1/4 w-[800px] md:w-[1100px] xl:w-[1500px] 2xl:w-[2200px] h-[1000px] md:h-[1500px] xl:h-[2000px]"
          }
          ellipse={ellipse_03}
        />
        <BgSpot
          style={{ zIndex: 0 }}
          className={
            "-translate-x-1/2 sm:block hidden md:-translate-x-1/2 -translate-y-1/3 w-[1000px] xl:w-[1400px] 2xl:w-[1800px] h-[1000px] xl:h-[1500px]"
          }
          ellipse={ellipse_03}
        />
        <BgSpot
          style={{ zIndex: 0 }}
          className={
            "-right-3/4 md:-right-2/3 lg:-right-1/3 -top-1/3 w-[800px] sm:w-[1200px] 2xl:w-[1800px] h-[1000px] md:h-[1500px]"
          }
          ellipse={ellipse_03}
        />
        <div className="md:border-y border-white/40 relative">

        <Fade>
          <Cardpan
            cnTitle={`
            md:[text-shadow:0_0px_35px_#F6019D,0_10px_35px_#F6019D]
            [text-shadow:0_0px_35px_#00FF71,0_0px_10px_#00FF71]
            md:text-accent-color
            text-white
          `}
            img={nft_ticket}
            title={"NFTks"}
          >
            Our project represents a paradigm shift in how we view value, opportunity, and
            engagement within the blockchain ecosystem. Introducing Non-fungible Tickets (NFTk) — a
            departure from the conventional understanding of NFTs as mere digital art pieces. NFTk
            isn't just a digital asset; it's an experience, an opportunity, a portal to the
            decentralized future we're shaping. Welcome to the evolution.
          </Cardpan>
          </Fade>
          <Fade>
          <Cardpan
            cnTitle={`
                      md:[text-shadow:0_0px_35px_#F6019D,0_10px_35px_#F6019D]
                      [text-shadow:0_0px_35px_#FF00F5,0_0px_10px_#FF00F5]
                      md:text-accent-color
                      text-white
                    `}
            img={nft_ticket_2}
            title={"DeLot"}
          >
            Transparent, fair, and inclusive. Available on multiple chains, every DeLot allows you to win and find your 100x gem! The DeLot is a testament to a fairer, more transparent future. Dive in and experience the future of decentralized gaming– where every draw is an opportunity for discovery.
          </Cardpan>
          </Fade>
          <Fade>
          <Cardpan
            cnTitle={`
          md:[text-shadow:0_0px_35px_#F6019D,0_10px_35px_#F6019D]
          [text-shadow:0_0px_35px_#00AAFF,0_0px_10px_#00AAFF]
          md:text-accent-color
          text-white
        `}
            cnRight={"md:text-center md:px-20"}
            cnLeft={"md:hidden block"}
            className={"border-b"}
            img={nft_ticket_3}
            title={"Charity and community pools"}
          >
            90% of our revenue is returned to our community. From immediate payouts to winners, to
            funding future rewards in our gaming universe, and even supporting charitable causes, we
            ensure the majority of every contribution empowers our players and the wider world. 69%
            getting paid to winners, and 10% to a charity fund and 10% to a community fund.
            Community fund fully used to fund future games’ payouts (casino & arcade).
          </Cardpan>
          </Fade>
        </div>
        <div className="border-l relative pt-20 flex justify-center items-center border-white/40 pb-48 max-w-5xl mx-auto">
          {/* <button className="w-fit pt-10 max-w-[80%]">
            <img className="w-full" src={btn_2} alt="btn_2" />
          </button> */}
          <Fade right>
          <Button onClick={handleButtonClick} img={btn_2} />
          </Fade>
        </div>
      </div>
    </section>
  );
};
