import React from 'react';
import Icon_1 from './images/1.svg';
import Icon_2 from './images/vincefreelancer.svg';
import Icon_3 from './images/qroni.svg';
import Icon_4 from './images/blith.svg';
import "./Ecosystem.scss"

const Ecosystem = () => {
    const data = [
        {
            name: "Vince Pay",
            icon: Icon_1,
            content: "Decentralized payment service featuring crypto/fiat onramp powered by Vince Chain. Send and receive payments faster than the money services you know.",
            button: "See More"
        },
        {
            name: "Vince Freelance",
            icon: Icon_2,
            content: "A Web3 freelance marketplace to buy and sell any in-demand skills. Work remotely and get paid securely and anonymously.",
            slug: "https://vincefreelancer.com",
            button: "Join Now"
        },
        {
            name: "Qroni Swap",
            icon: Icon_3,
            content: "A robust ecosystem featuring multi-chain crypto services, including DEX, liquidity staking, NFT ticketing & trading, onramp, and yield farming.",
            slug: "https://qroni.org/",
            button: "Explore Qroni Swap"
        },
        {
            name: "Blithe Wallet",
            icon: Icon_4,
            content: "More than just a digital crypto wallet. Blithe Wallet offers non-custodial asset management services, plus staking, NFC payment, and crypto buy/sell services.",
            slug: "https://www.blithewallet.com/",
            button: "Use Wallet"
        },
    ]
  return (
    <section className='ecosystem-section py-5 py-lg-6'>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title mb-5 text-center">
                        <h2 className="fs-5xl fs-lg-6xl text-black ff-tertiary mb-3">The <span className="ff-secondary">vince ecosystem</span></h2>
                    </div>
                </div>
            </div>
            <div className="row g-4">
                {/* Single Item */}
                {data && data.map(( item, i) => (
                <div key={i} className="col-sm-6 col-lg-4 col-xl-3">
                    <a className="ecoLink" href={item.slug}>
                    <div className={`card card-body h-100 ecosystem-item text-center px-xxl-4 py-5 border-0 ${ i === 0 ? 'active' : null }`}>
                        <div className="ecosystem-item__icon mb-4">
                            <img src={item.icon} alt={item.name} />
                        </div>
                        <div className="ecosystem-item__content">
                            {item.name && <h3 className='fs-3xl'>{item.name}</h3>}
                            {item.content && <div className='fs-md'>{item.content}</div>}
                            {item.content && <div className='fs-md buttons'><a href={item.slug}>{item.button}</a></div>}
                        </div>
                    </div>
                    </a>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Ecosystem