import React from 'react';
import SHAPE_1 from './Moving forward-amico.svg';
import { motion } from "framer-motion";
import { FaTwitter, FaTelegramPlane, FaGithub, FaYoutube } from 'react-icons/fa';
import "./BuildFuture.scss"

const BuildFuture = () => {
  return (
    <motion.section className="cta-section py-5 py-lg-6 text-center text-md-start"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}>

        <div className="container-lg">
            <div className="row gy-5 align-items-center">
                <div className="col-12">
                    <div className="cta-section-box position-relative py-3">

                        {/* SHAPE 1 */}
                        <img src={SHAPE_1} alt="" className="shape-1 cta-img b-img" />
                        {/* SHAPE 2*/}
                       
                        <motion.svg className='shape-2' width="173" height="172" viewBox="0 0 173 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30.8719 33.4861L34.0237 21.0912C34.8786 17.7676 32.8434 14.3327 29.5199 13.4778L17.125 10.326C13.8015 9.47111 10.3665 11.5063 9.51156 14.8298L6.46337 27.2624C5.60847 30.5859 7.64369 34.0208 10.9672 34.8757L23.3621 38.0275C26.5821 38.8448 30.05 36.8802 30.8719 33.4861Z" fill="#FDB820"/>
                            <motion.path d="M166.982 147.512C167.156 126.795 155.169 128.944 130.714 135.373C108.633 141.178 112.645 121.351 119.747 106.513C128.106 89.05 121.893 80.4795 111.813 79.5726C96.3772 78.1837 74.9256 95.8788 64.5698 86.6442C54.214 77.4097 69.1616 58.1353 71.144 51.1675C77.3347 29.4074 43.4705 19.6543 20.3948 23.6205" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                                variants={{
                                    offscreen: { strokeDasharray: 300, strokeDashoffset: -300 },
                                    onscreen: { strokeDashoffset: 0,
                                        transition: { delay: 1, duration: 1.5 }
                                    }
                                }} />
                        </motion.svg>

                         {/* CONTENT */}
                         <div className="cta-content p-4 p-md-5 p-lg-6">
                            <h2 className='ff-tertiary fs-4xl fs-sm-5xl fs-md-6xl mb-3'>Build in the <div className='ff-secondary'>Future</div></h2>
                            <p>Vince Chain is powering the decentralized future faster than you think.</p>
                            <div className="sButton">
                                <a target="_blank" href="">Start Building</a>
                                <a target="_blank" href="https://vincechain.gitbook.io/vince-chain-documentation/">Learn about Vince Chain</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </motion.section>

  )
}   

export default BuildFuture