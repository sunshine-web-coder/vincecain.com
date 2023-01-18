import React from 'react';
import Icon_1 from './images/1.svg';
import Icon_2 from './images/2.svg';
import Icon_3 from './images/3.svg';
import Icon_4 from './images/4.svg';

const Ecosystem = () => {
    const data = [
        {
            name: "Vince Pay",
            icon: Icon_1,
            content: "A fully decentralized payment service powered by smart contracts. Send and recieve payments instantly.",
        },
        {
            name: "Vince Freelance",
            icon: Icon_2,
            content: "Hire top-notch professionals to get your project done and work with other businesses to scale your interests.",
            slug: "https://vincefreelancer.com"
        },
        {
            name: "Qroni Swap",
            icon: Icon_3,
            content: "Qroniswap is a Defi protocol and ecosystem covering cross-chain crypto trading and swapping,NFT ticketing, staking, farming and fiat on-ramp payments.",
            slug: "https://qroni.org/"
        },
        {
            name: "Blithe Wallet",
            icon: Icon_4,
            content: "First non- custodial multi chain Wallet to offer  NFC Payment, stake and buy crypto assets..No KYC needed!",
            slug: "https://www.blithewallet.com/"
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