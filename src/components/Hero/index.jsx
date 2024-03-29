import React from 'react';
import Banner from './images/banner.png';
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import AddWalletComponent from '../AddWalletComponent';
import style from "./Hero.module.scss"

const Hero = () => {
    
  return (
    <motion.section className="hero-section"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}> 

        {/* SHAPES */}
        <div className='shape-1'>

            <motion.svg width="162" height="91" viewBox="0 0 162 91" fill="none" xmlns="http://www.w3.org/2000/svg" 
                variants={{
                    offscreen: { x: 0, y: 20, opacity: 0, },
                    onscreen: { x: 0, y: 0, opacity: 1,
                        transition: { delay: 1.3, duration: 0.8 }
                    }
                }}>
                <path d="M34.572 70.0529C53.6656 70.0529 69.144 54.5745 69.144 35.4809C69.144 16.3873 53.6656 0.908936 34.572 0.908936C15.4784 0.908936 0 16.3873 0 35.4809C0 54.5745 15.4784 70.0529 34.572 70.0529Z" fill="white"/>
                <path d="M20.6196 56.9235C14.9811 56.9235 10.3715 52.3139 10.3715 46.6754C10.3715 41.0368 14.9811 36.4272 20.6196 36.4272C26.2582 36.4272 30.8678 41.0368 30.8678 46.6754C30.8678 52.3139 26.2993 56.9235 20.6196 56.9235ZM20.6196 37.4973C15.5573 37.4973 11.4416 41.613 11.4416 46.6754C11.4416 51.7377 15.5573 55.8534 20.6196 55.8534C25.682 55.8534 29.7977 51.7377 29.7977 46.6754C29.7977 41.613 25.682 37.4973 20.6196 37.4973Z" fill="#01304D"/>
                <path d="M15.7632 38.4853C15.5162 38.4853 15.3104 38.3618 15.2281 38.1148C15.187 37.8679 7.61404 14.6964 30.5386 0.0856495C30.7855 -0.078979 31.1148 0.00333524 31.2794 0.250278C31.444 0.497221 31.3617 0.826478 31.1148 0.991107C8.93107 15.1492 16.2159 37.4975 16.2982 37.7444C16.3805 38.0325 16.257 38.3206 15.9689 38.4441C15.8866 38.4441 15.8455 38.4853 15.7632 38.4853Z" fill="#01304D"/>
                <path d="M46.7545 67.0068C34.4074 67.0068 24.6943 55.8532 24.5708 55.7298C24.3651 55.4828 24.4062 55.1536 24.612 54.9478C24.8589 54.742 25.1882 54.7832 25.394 54.989C25.5175 55.1536 37.0003 68.3239 50.6233 65.5252C50.9114 65.484 51.1995 65.6486 51.2818 65.9367C51.3641 66.2248 51.1583 66.513 50.8703 66.5953C49.4298 66.8834 48.0716 67.0068 46.7545 67.0068Z" fill="#01304D"/>
                <path d="M19.5496 51.3263C17.1625 51.3263 15.2281 49.392 15.2281 47.0048C15.2281 44.6177 17.1625 42.6833 19.5496 42.6833C21.9368 42.6833 23.8711 44.6177 23.8711 47.0048C23.83 49.392 21.8956 51.3263 19.5496 51.3263ZM19.5496 43.7946C17.7799 43.7946 16.3394 45.2351 16.3394 47.0048C16.3394 48.7746 17.7799 50.2151 19.5496 50.2151C21.3194 50.2151 22.7599 48.7746 22.7599 47.0048C22.7599 45.2351 21.3194 43.7946 19.5496 43.7946Z" fill="#01304D"/>
                <path d="M1.93444 24.4096C1.85213 24.4096 1.81097 24.4096 1.72866 24.3685C1.44056 24.245 1.31709 23.9157 1.44056 23.6688C6.09132 12.6387 21.0725 8.4818 21.6899 8.31718C21.8133 8.27602 41.4865 0.908889 57.2908 18.0303L65.3576 19.2238C65.6457 19.265 65.8515 19.5531 65.8103 19.8412C65.7692 20.1293 65.4811 20.3351 65.193 20.2939L56.7558 19.0592L56.6323 18.9357C41.2807 2.1436 22.2249 9.22263 22.0191 9.30495C21.8133 9.38726 6.91446 13.503 2.42833 24.0392C2.34602 24.245 2.14023 24.4096 1.93444 24.4096Z" fill="#01304D"/>
                <path d="M66.0161 48.404C65.9749 48.404 65.8926 48.404 65.8515 48.3628C65.5634 48.2805 65.3987 47.9512 65.4811 47.6631C69.4733 34.7809 63.9171 27.6196 63.8759 27.5373L63.7113 27.3315L65.2341 21.7341C65.3164 21.446 65.6045 21.2814 65.8926 21.3637C66.1807 21.446 66.3454 21.7341 66.263 22.0222L64.8637 27.1257C65.8515 28.4839 70.2964 35.6864 66.4688 48.0335C66.4688 48.2805 66.2219 48.404 66.0161 48.404Z" fill="#01304D"/>
                <path d="M30.5798 42.601C30.374 42.601 30.127 42.4775 30.0859 42.2306C30.0036 41.9425 30.127 41.6544 30.4151 41.5309C34.9836 39.8846 39.3462 37.9914 43.3796 35.8512C43.6677 35.7277 43.997 35.8101 44.1205 36.0982C44.2439 36.3863 44.1616 36.7155 43.8735 36.839C39.7578 38.9792 35.354 40.9135 30.7444 42.5598C30.7032 42.5598 30.6209 42.601 30.5798 42.601Z" fill="#01304D"/>
                <path d="M52.3519 31.6942C52.1873 31.6942 52.0227 31.6119 51.8992 31.4472C51.7346 31.2003 51.7757 30.871 52.0638 30.7064C59.8425 25.4795 63.382 21.1168 63.382 21.0756C63.5878 20.8287 63.9171 20.7875 64.164 20.9933C64.411 21.1991 64.4521 21.5284 64.2464 21.7753C64.0817 21.9399 60.5834 26.3026 52.6812 31.653C52.5989 31.6942 52.4754 31.6942 52.3519 31.6942Z" fill="#01304D"/>
                <path d="M8.51958 50.7088C6.37941 50.7088 2.51064 50.1738 0.49394 46.7166C0.329312 46.4696 0.411626 46.1404 0.699726 45.9758C0.946669 45.8111 1.27593 45.8934 1.44055 46.1815C3.86883 50.4207 9.79545 49.5564 9.87777 49.5564C10.1659 49.5153 10.454 49.7211 10.4951 50.0092C10.5363 50.2973 10.3305 50.5854 10.0424 50.6265C9.96008 50.5854 9.38388 50.7088 8.51958 50.7088Z" fill="#01304D"/>
                <path d="M137.588 49.1862C137.424 49.1862 137.3 49.1039 137.177 49.0216C136.971 48.8158 137.012 48.4454 137.218 48.2396C144.955 41.4075 152.981 33.6288 161.048 25.1504C161.254 24.9446 161.583 24.9446 161.83 25.1504C162.036 25.3562 162.077 25.6855 161.83 25.9324C153.763 34.4519 145.696 42.2306 137.918 49.1039C137.835 49.145 137.712 49.1862 137.588 49.1862Z" fill="#01304D"/>
                <path d="M117.092 65.6079C116.927 65.6079 116.763 65.5256 116.639 65.361C116.475 65.114 116.516 64.7848 116.763 64.6202C118.039 63.7147 119.356 62.7269 120.673 61.7392C120.92 61.5745 121.249 61.6157 121.455 61.8626C121.619 62.1096 121.578 62.4388 121.331 62.6446C120.014 63.6324 118.697 64.579 117.421 65.5256C117.339 65.5668 117.216 65.6079 117.092 65.6079Z" fill="#01304D"/>
                <path d="M53.6278 90.5902C49.1005 90.5902 45.1905 90.0963 41.8568 89.3966C28.6454 86.5568 22.2249 79.8481 21.9779 79.56C21.7721 79.3543 21.7721 78.9838 22.0191 78.7781C22.2249 78.5723 22.5953 78.5723 22.8011 78.8192C23.048 79.1073 48.7301 105.53 102.44 74.0038C102.687 73.8392 103.016 73.9215 103.181 74.2096C103.346 74.4566 103.263 74.7858 102.975 74.9504C82.232 87.0918 65.7691 90.5902 53.6278 90.5902Z" fill="#01304D"/>
                <path d="M43.8735 81.2886C37.4118 81.2886 33.7077 79.1485 33.4608 79.025C33.2138 78.8604 33.1315 78.5311 33.255 78.2842C33.4196 78.0372 33.7489 77.9549 33.9958 78.0784C34.0781 78.1195 41.4864 82.3999 53.5866 78.6546C68.4443 74.045 91.6158 56.9648 117.545 1.60841C117.668 1.32031 117.998 1.238 118.286 1.36147C118.574 1.48494 118.697 1.8142 118.533 2.1023C92.4389 57.8702 68.9382 75.1151 53.8747 79.7658C50.0471 80.8771 46.7134 81.2886 43.8735 81.2886Z" fill="#01304D"/>
            </motion.svg>
        </div>

        {/* SHAPE 3 */}
        <div className='shape-2'>
            <motion.svg width="323" height="242" viewBox="0 0 323 242" fill="none" xmlns="http://www.w3.org/2000/svg" 
                variants={{
                    offscreen: { x: -20, y: -20, opacity: 0, },
                    onscreen: { x: 0, y: 0, opacity: 1, 
                        transition: { delay: 1, bounce: 0.4, duration: 0.8 }
                    }
                }}
                >
            <path d="M35.7865 221.832L19.0035 217.931L17.6614 235.122L0.567968 231.154C0.398644 231.117 0.270694 230.942 0.299272 230.787C0.315055 230.615 0.469311 230.502 0.62321 230.55L17.1112 234.371L18.4533 217.181L35.2363 221.081L36.5784 203.891L53.3614 207.791L54.6745 190.917C54.6903 190.745 54.8291 190.643 54.9985 190.68C55.1678 190.717 55.2829 190.874 55.2671 191.046L53.9116 208.542L37.1286 204.641L35.7865 221.832Z" fill="black"/>
            <path d="M89.8181 182.214L73.0351 178.313L71.693 195.504L54.5996 191.536C54.4303 191.499 54.3023 191.324 54.3309 191.169C54.3467 190.997 54.5009 190.883 54.6548 190.932L71.1429 194.753L72.4849 177.563L89.2679 181.463L90.61 164.273L107.393 168.173L108.706 151.299C108.722 151.127 108.861 151.025 109.03 151.062C109.199 151.098 109.315 151.255 109.299 151.428L107.943 168.924L91.1602 165.023L89.8181 182.214Z" fill="black"/>
            <line x1="108.574" y1="151.969" x2="314.823" y2="0.758057" stroke="black" strokeWidth="0.6"/>
        </motion.svg>
        </div>

        {/* SHAPE 2 */}
        <div className='shape-3'>
            <motion.svg width="173" height="173" viewBox="0 0 173 173" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.3285 33.8436L34.4803 21.4487C35.3352 18.1251 33.2999 14.6902 29.9764 13.8353L17.5815 10.6835C14.258 9.82859 10.823 11.8638 9.9681 15.1873L6.91991 27.6198C6.06501 30.9434 8.10023 34.3783 11.4238 35.2332L23.8186 38.385C27.0386 39.2023 30.5065 37.2377 31.3285 33.8436Z" fill="#FDB820"/>
            <motion.path d="M167.439 147.869C167.613 127.153 155.626 129.301 131.17 135.731C109.09 141.535 113.102 121.708 120.204 106.871C128.562 89.4075 122.35 80.837 112.27 79.93C96.8339 78.5411 75.3823 96.2363 65.0265 87.0017C54.6706 77.7672 69.6183 58.4928 71.6006 51.525C77.7914 29.7648 43.9272 20.0118 20.8515 23.978" stroke="black" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                variants={{
                    offscreen: { strokeDasharray: 300, strokeDashoffset: -300 },
                    onscreen: { strokeDashoffset: 0,
                        transition: { delay: 1, duration: 1.5 }
                    }
                }}            
            />
        </motion.svg>
        </div>


        <div className="container-lg">
            <div className="row gy-3 g-md-5 align-items-center mb-4 mb-md-5 mb-lg-7">
                <div className="col-lg-6 col-xl-7 text-center text-lg-end order-lg-last">
                    <img src={Banner} className="img-fluid" alt="" />
                </div>
                <div className="col-lg-6 col-xl-5">
                    <div className="hero-section__content text-center text-lg-start">
                        <h2 className="mb-2 mb-md-4 ff-light lh-xs fs-4xl fs-lg-6xl fs-xxl-7xl">Industry<span className="arial">-</span>Grade Blockchain For 
                            <div className="ff-secondary lh-md tilt-text">
                                <TypeAnimation
                                    sequence={[
                                        'DeFi', // Types 'One'
                                        1000, // Waits 1s
                                        'Remote work', // Deletes 'One' and types 'Two'
                                        2000, // Waits 2s
                                        'Gaming', // Types 'Three' without deleting 'Two'
                                        3000, // Waits 3s
                                        'web 3',
                                        4000, // Waits 4s
                                        'and More...',
                                        () => {
                                        console.log('Done typing!'); // Place optional callbacks anywhere in the array
                                        }
                                    ]}
                                    wrapper="div"
                                    cursor={true}
                                    repeat={Infinity}
                                    />
                            </div>
                        </h2>
                        <div className="mb-3 mb-md-5">
                            <div className="fs-md-lg">Vince is a blockchain powering the Vince <br />Ecosystem and its products.</div>
                        </div>
                        <div className="d-flex gap-3 align-items-center justify-content-center justify-content-lg-start">
                            <a href="">
                               <button type='button' className="btn btn-primary">Start Building</button> 
                            </a>
                            {/* <a className={style.buyVinceBtnHero} href="">
                              <button type='button' className="btn btn-dark">Buy VCE</button>  
                            </a>                             */}
                            <div className={style.addWallet_desktop}>
                                <AddWalletComponent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row gy-3 gy-md-4 text-center text-lg-start">
                {/* <div className="col-lg-6">
                    <h5 className="ff-primary fs-sm fs-sm-lg mb-2">Migration to our blockchain <br />mainnet:</h5>
                    <h2 className='ff-primary  fs-md fs-sm-3xl fw-bold'>Coming Soon</h2>
                </div> */}
                {/* <div className="col-lg-6">
                    <h5 className="ff-primary fs-sm fs-sm-lg mb-2">VCE now live on Vince</h5>
                    <h2 className='ff-primary  fs-md fs-sm-3xl  fw-bold'>Freelancer Platform</h2>
                </div> */}
            </div>
        </div>
    </motion.section>

  )
}

export default Hero