import React from 'react';
import Shape1 from './images/shape-1.svg';
import Shape2 from './images/shape-2.svg';
import Thumb1 from './images/1.jpg';
import Thumb2 from './images/2.jpg';
import { motion } from "framer-motion";

const Features = () => {
    const data = [
        {
            thumb: Thumb1,
            title: 'Why build <br /> on our <span class="ff-secondary">chain?</span>',
            content: "Vince Chain is one of the fastest blockchain in the world with low transaction fees, scalable and builder friendly. Its a blockchain built for the meta verse and web 3.",
            button: {
                label: "Explorer",
                slug: 'https://vincescan.com'
            }
        },
        {
            thumb: Thumb2,
            title: 'Vince <span class="ff-secondary">Coin</span>',
            content: "",
            button: {
                label: "Buy VCE",
                slug: 'https://pancakeswap.finance/swap?outputCurrency=0x5a9a8a4B11dF96c640c8aD65626033D03028a8cb'
            },
            address: "0x5a9a8a4B11dF96c640c8aD65626033D03028a8cb"
        },
    ]
  return (
    <motion.section className='features-section py-5 py-lg-10'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}>
        <div className="container-lg position-relative">

            <div className="shape-1 d-none d-md-block">
                <motion.img src={Shape1} alt="" className='img-fluid' 
                    variants={{
                        offscreen: { x: 0, y: 20, opacity: 0, },
                        onscreen: { x: 0, y: 0, opacity: 2,
                            transition: { delay: 0.5, duration: 0.8 }
                        }
                    }} />
            </div>
            <div className="shape-2 d-none d-md-block">
                <motion.img src={Shape2} alt="" className='img-fluid' 
                    variants={{
                        offscreen: { x: 0, y: 20, opacity: 0, },
                        onscreen: { x: 0, y: 0, opacity: 2,
                            transition: { delay: 0.9, duration: 0.8 }
                        }
                    }}/>
            </div>

            <div className="row gy-6 g-lg-6">
                { data && data.map(( item , i ) => (
                    <motion.div key={i} className="col-md-6">
                        <div className={`card features-item rounded-0 border-0 h-100 ${ i === 0 ? 'features-item__gap' : ''}`}>
                            <img src={item.thumb} className="features-item__thumb" alt={item.title} />

                            <div className="card-body p-4 pb-5 p-md-5 position-relative">
                                {item.title && <h2 dangerouslySetInnerHTML={{__html: item.title}} className='ff-tertiary fs-3xl fs-xl-6xl mb-3'></h2>}
                                {item.content && <div className='fs-xl-lg'>{item.content}</div>}
                                {item.address && <div className='mt-4 features-item__address'><strong>Bsc address:</strong> {item.address}</div>}
                                {item.button && <a href={item.button.slug}><button className='features-item__btn btn btn-primary'>{item.button.label}</button></a>}
                            </div>
                        </div>
                    </motion.div>
                    ))
                }
            </div>
        </div>
    </motion.section>
  )
}

export default Features