import React from 'react';
import collabSvg from "./assets/collab.svg";
import secureSvg from "./assets/secure.svg";
import transSvg from "./assets/money-transaction.svg";
import dataTransSvg from "./assets/data-transfer.svg";
import giftSvg from "./assets/gift.svg";
import "./Whybuildon.scss"

const Whybuildon = () => {
    const data = [
        {
            icon: collabSvg,
            p1: "Vince Chain x Cosmos",
            p2: "Application-specific functionalities, Tendermint Core, and BFT secure framework to build scalable applications.",
         },
        {
            icon: secureSvg,
            p1: "Secure and fast",
            p2: "High finality and great throughput; signature of a high-level blockchain framework",
         },
        {
            icon: transSvg,
            p1: "Low-cost transactions",
            p2: "Interact with the Vince Chain mainnet at the lowest cost possible. Less fees and faster transactions than Ethereum.",
         },
        {
            icon: dataTransSvg,
            p1: " Interoperable with EVM",
            p2: "Deploy smart contracts and transfer assets easily between Vince Chain, Ethereum, and other virtual machines (VM).",
         },
        {
            icon: giftSvg,
            p1: "Reward Making Machine (RMM)",
            p2: " Vince Chain rewards network and liquidity contributor with the VCE token. Other reward-making protocols include staking, yield farming, decentralized remote work, etc.",
         },
    ]
  return (
    <section className="marketplace-section py-5 py-lg-7 text-center text-md-start">
        <div className="container-lg">
            <div className="header_title">
                <h2 className="mb-2 mb-md-4 ff-light lh-xs fs-4xl fs-lg-6xl fs-xxl-7xl">Why Build on Vince Chain</h2>
            </div>
            <div className="grid-d">
                <div className="grid-d-d">
                    {data.map((item, i) => (
                        <div className='grid-box' key={i}>
                        <div className="grid-box-icon">
                            <img src={item.icon} alt="" />
                        </div>
                        <div className="grid-box-txt">
                            <p>{item.p1}</p>
                            <p>{item.p2}</p>
                        </div>
                    </div>
                    ))}
                    
                </div>
            </div>
        </div>
    </section>

  )
}

export default Whybuildon