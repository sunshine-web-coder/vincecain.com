import React from 'react'
import { Container, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import { FaTwitter, FaTelegramPlane, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { motion } from "framer-motion";

const Footer = () => {
    const data = {
        menu : [
            // {
            //     "name" : "About us",
            //     "slug": "about-us",
            // },
            // {
            //     "name" : "Blog",
            //     "slug": "https://medium.com/@vincechain",
            // },
            {
                "name" : "Contact us",
                "slug": "mailto:support@vincechain.com",
            },
            {
                "name" : "Whitepaper",
                "slug": "https://drive.google.com/file/d/1hUqaPoJpypjdnZlJBQDUG7vu7YzPdBqR/view?usp=sharing",
            },
            // {
            //     "name" : "FAQs",
            //     "slug": "/FAQs",
            // }
        ],
        navbar : {
            menu:  [
                {
                    "name" : "Help Center",
                    "slug": "mailto:support@vincechain.com",
                },
                // {
                //     "name" : "Terms of Service",
                //     "slug": "terms-of-service",
                // },
                // {
                //     "name" : "Cookie Policy",
                //     "slug": "cookie-policy",
                // },
                // {
                //     "name" : "Privacy Policy",
                //     "slug": "privacy-policy",
                // }
            ]
        },
        copyright: {
            text: "Copyright © 2023 Vince Chain. All rights reserved",
        },
        social : [
            {
                name: "Twitter",
                icon: <FaTwitter />,
                slug: "https://twitter.com/vincechain",
            },
            {
                name: "Telegram",
                icon: <FaTelegramPlane />,
                slug: "https://t.me/vincechain",
            },
            {
                name: "Instagram",
                icon: <FaInstagram />,
                slug: "https://instagram.com/vincechain?utm_medium=copy_link",
            },
            {
                name: "Linkedin",
                icon: <FaLinkedinIn />,
                slug: "https://www.linkedin.com/company/vangold-finance",
            },
            {
                name: "Youtube",
                icon: <FaYoutube />,
                slug: "https://youtube.com/channel/UCpRE6nyI3DVxIYz6uDBJwkw",
            },
        ]
    }
    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };
  return (
    <motion.footer className="footer"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.3 }}>
        <div className="footer-top bg-black curbe-start text-light pt-7 pb-5 pt-lg-8 pb-lg-6 text-center">
            <div className="container-lg footer-shape-wrapper">
                    
                {/* ANIMATION SHAPES 1  */}
                <div className='footer-shape-1'>
                    <motion.svg width="173" height="172" viewBox="0 0 173 172" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.8719 138.357L34.0237 150.752C34.8786 154.076 32.8434 157.511 29.5199 158.366L17.125 161.517C13.8015 162.372 10.3665 160.337 9.51156 157.013L6.46337 144.581C5.60847 141.257 7.64369 137.822 10.9672 136.968L23.3621 133.816C26.5821 132.999 30.05 134.963 30.8719 138.357Z" fill="#FDB820"/>
                        <motion.path d="M166.982 24.3313C167.156 45.048 155.169 42.8994 130.714 36.4702C108.633 30.6654 112.645 50.4924 119.747 65.3298C128.106 82.7932 121.893 91.3637 111.813 92.2706C96.3772 93.6595 74.9256 75.9644 64.5698 85.199C54.214 94.4335 69.1616 113.708 71.144 120.676C77.3347 142.436 43.4705 152.189 20.3948 148.223" stroke="#272020" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"
                            variants={{
                                offscreen: { strokeDasharray: 300, strokeDashoffset: -300 },
                                onscreen: { strokeDashoffset: 0,
                                    transition: { delay: 1, duration: 1.5 }
                                }
                            }} />
                    </motion.svg>
                </div>
                {/* ANIMATION SHAPES 2  */}
                <div className='footer-shape-2'>
                    <motion.svg width="184" height="141" viewBox="0 0 184 141" fill="none" xmlns="http://www.w3.org/2000/svg" 
                        variants={{
                            offscreen: { x: 0, y: 50, rotate: 20, opacity: 0, },
                            onscreen: { x: 0, y: 0, rotate: 0, opacity: 2,
                                transition: { delay: 0.7, duration: 0.5 }
                            }
                        }}>
                        <path d="M56.2828 109.12C74.2446 102.644 83.5557 82.8335 77.0796 64.8717C70.6036 46.9099 50.7929 37.5989 32.8311 44.0749C14.8693 50.5509 5.5582 70.3617 12.0342 88.3235C18.5102 106.285 38.321 115.596 56.2828 109.12Z" fill="black"/>
                        <path d="M38.7042 101.502C33.3999 103.414 27.5001 100.641 25.5877 95.3368C23.6753 90.0325 26.4482 84.1327 31.7525 82.2203C37.0568 80.3078 42.9566 83.0808 44.869 88.3851C46.7815 93.6894 44.0473 99.5752 38.7042 101.502ZM32.1154 83.2269C27.3532 84.9439 24.8774 90.2116 26.5944 94.9739C28.3114 99.7361 33.579 102.212 38.3413 100.495C43.1036 98.7779 45.5794 93.5103 43.8624 88.748C42.1454 83.9857 36.8777 81.5099 32.1154 83.2269Z" fill="white"/>
                        <path d="M27.882 85.8033C27.6497 85.8871 27.4143 85.8407 27.2531 85.6363C27.1306 85.418 12.1475 66.1886 28.7575 44.6685C28.934 44.4298 29.2717 44.3956 29.5103 44.5721C29.7489 44.7485 29.7831 45.0862 29.6067 45.3248C13.54 66.1678 27.9729 84.7206 28.1341 84.9249C28.3093 85.168 28.2908 85.4809 28.0617 85.6948C27.9842 85.7227 27.9595 85.7754 27.882 85.8033Z" fill="white"/>
                        <path d="M66.7101 102.123C55.0949 106.311 42.1745 99.1127 42.0165 99.0385C41.7392 98.8759 41.6662 98.5522 41.79 98.2889C41.9525 98.0115 42.2762 97.9386 42.5396 98.0624C42.7116 98.1753 57.9808 106.67 69.847 99.4169C70.1041 99.2805 70.431 99.3377 70.6061 99.5808C70.7813 99.8239 70.6854 100.165 70.4423 100.34C69.1849 101.099 67.9491 101.676 66.7101 102.123Z" fill="white"/>
                        <path d="M35.7993 96.599C33.5537 97.4087 31.0779 96.245 30.2682 93.9994C29.4586 91.7538 30.6222 89.278 32.8678 88.4683C35.1134 87.6587 37.5893 88.8223 38.3989 91.068C39.1698 93.3275 38.0062 95.8033 35.7993 96.599ZM33.2447 89.5137C31.5799 90.114 30.7133 91.9577 31.3136 93.6225C31.9139 95.2874 33.7575 96.1539 35.4224 95.5537C37.0872 94.9534 37.9538 93.1097 37.3535 91.4449C36.7533 89.78 34.9096 88.9135 33.2447 89.5137Z" fill="white"/>
                        <path d="M10.0989 77.2525C10.0215 77.2804 9.98275 77.2944 9.89136 77.2836C9.57846 77.2651 9.35063 76.9973 9.38303 76.7231C10.017 64.7694 22.7003 55.7777 23.2252 55.4134C23.3274 55.3328 39.3356 41.7298 60.0103 52.4759L68.0037 50.8627C68.2887 50.8037 68.58 51.0049 68.639 51.2899C68.698 51.5749 68.4968 51.8662 68.2118 51.9252L59.8559 53.6253L59.6979 53.551C39.5608 42.9611 24.0356 56.0837 23.87 56.231C23.7043 56.3782 11.0845 65.3033 10.4379 76.7365C10.4302 76.958 10.2925 77.1827 10.0989 77.2525Z" fill="white"/>
                        <path d="M78.5203 78.0898C78.4815 78.1038 78.4041 78.1317 78.3514 78.1069C78.0525 78.1272 77.7859 77.8733 77.7657 77.5744C77.152 64.1017 69.4962 59.2494 69.4295 59.1859L69.2049 59.0482L68.739 53.2661C68.7187 52.9671 68.9339 52.7146 69.2328 52.6943C69.5317 52.674 69.7843 52.8892 69.8046 53.1881L70.2192 58.4637C71.6091 59.4064 78.2334 64.6743 78.8205 77.5878C78.9043 77.8201 78.7138 78.02 78.5203 78.0898Z" fill="white"/>
                        <path d="M43.2163 84.6496C43.0227 84.7194 42.7485 84.687 42.626 84.4687C42.4509 84.2256 42.4693 83.9127 42.6985 83.6988C46.4377 80.6006 49.8996 77.3399 52.9681 73.9586C53.1972 73.7447 53.5349 73.7105 53.7487 73.9396C53.9626 74.1688 53.9969 74.5064 53.7677 74.7203C50.6218 78.1296 47.1352 81.4429 43.3572 84.5551C43.3185 84.569 43.255 84.6357 43.2163 84.6496Z" fill="white"/>
                        <path d="M59.9985 67.0049C59.8436 67.0607 59.6608 67.0391 59.4888 66.9262C59.2502 66.7497 59.1772 66.426 59.3924 66.1734C64.9372 58.6179 66.7872 53.3134 66.7732 53.2747C66.8831 52.9726 67.1788 52.8222 67.481 52.932C67.7831 53.0418 67.9334 53.3376 67.8236 53.6397C67.7246 53.8504 65.9133 59.141 60.2942 66.8545C60.2308 66.9211 60.1146 66.963 59.9985 67.0049Z" fill="white"/>
                        <path d="M25.2136 99.7592C23.2003 100.485 19.3793 101.294 16.3096 98.7257C16.071 98.5492 16.0367 98.2115 16.2519 97.9589C16.4284 97.7203 16.766 97.6861 17.0186 97.9013C20.7408 101.066 26.0229 98.2424 26.1004 98.2144C26.3574 98.078 26.6983 98.1739 26.8347 98.4309C26.9711 98.688 26.8753 99.0288 26.6182 99.1652C26.5268 99.1545 26.0266 99.466 25.2136 99.7592Z" fill="white"/>
                        <path d="M146.115 54.5502C145.96 54.6061 145.816 54.5705 145.672 54.535C145.409 54.4112 145.322 54.0487 145.446 53.7854C150.407 44.7339 155.319 34.6942 160.032 23.9824C160.156 23.719 160.466 23.6073 160.768 23.7171C161.031 23.8409 161.181 24.1367 161.033 24.4528C156.334 35.2033 151.384 45.257 146.397 54.3611C146.334 54.4278 146.231 54.5084 146.115 54.5502Z" fill="white"/>
                        <path d="M132.404 76.9502C132.249 77.0061 132.066 76.9845 131.894 76.8715C131.656 76.695 131.583 76.3713 131.759 76.1327C132.652 74.8481 133.556 73.4722 134.46 72.0963C134.637 71.8577 134.96 71.7847 135.238 71.9472C135.476 72.1237 135.549 72.4474 135.387 72.7247C134.483 74.1007 133.565 75.4379 132.686 76.7611C132.622 76.8277 132.52 76.9083 132.404 76.9502Z" fill="white"/>
                        <path d="M81.1747 121.977C76.9158 123.513 73.0701 124.374 69.6967 124.847C56.3052 126.656 47.9899 122.523 47.6599 122.336C47.3965 122.212 47.2708 121.863 47.4333 121.586C47.5571 121.323 47.9056 121.197 48.1829 121.359C48.513 121.547 81.6346 137.693 121.468 89.8181C121.645 89.5794 121.982 89.5452 122.235 89.7604C122.473 89.9369 122.508 90.2745 122.292 90.5271C106.897 108.984 92.5964 117.859 81.1747 121.977Z" fill="white"/>
                        <path d="M68.8438 116.535C62.7651 118.727 58.5547 117.97 58.2805 117.938C57.9923 117.867 57.8032 117.585 57.8356 117.31C57.9067 117.022 58.1886 116.833 58.4627 116.866C58.5541 116.876 66.9751 118.39 77.0877 110.763C89.5013 101.387 105.506 77.4604 111.123 16.5909C111.141 16.278 111.423 16.0889 111.736 16.1074C112.049 16.1258 112.277 16.3937 112.22 16.7205C106.588 78.033 90.3288 102.226 77.7356 111.711C74.5118 114.054 71.5153 115.572 68.8438 116.535Z" fill="white"/>
                    </motion.svg>
                </div>
                {/* CONTENT */}
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <h2 className='fs-4xl fs-lg-5xl mb-4'>Stay up to date</h2>
                        <form action="#" className='mb-5' onSubmit={handleSubmit}>
                            <div className="form-group d-flex gap-2 p-2 p-md-3 bg-white">
                                <input type="text" className="form-control rounded-0 fs-sm-lg bg-transparent border-0 shadow-none"  placeholder='Enter your email'/> 
                                <button type="submit" className="btn btn-warning fs-sm fs-sm-lg text-nowrap rounded-0">Get Started</button>
                            </div>
                        </form>

                        {/* NAVBAR MENU */}
                        {data && data.menu && <Nav className="justify-content-center gap-lg-4">
                            {data.menu.map(( item, key) => (
                                <Nav.Link key={key} href={item.slug} className="link-light fs-xl-lg fw-regular">{item.name}</Nav.Link>
                            ))}
                        </Nav>}
                    </div>
                </div>

            </div>

        </div>
        <div className="footer-navbar py-4">
            <div className='container-lg justify-content-center'>
                {/* NAVBAR MENU */}
                {data && data.navbar && data.navbar.menu && <Nav className="justify-content-center gap-lg-4">
                    {data.navbar.menu.map(( item, key) => (
                        <Nav.Link key={key} href={item.slug} className="link-dark fs-xl-lg fw-regular">{item.name}</Nav.Link>
                    ))}
                </Nav>}
            </div>
        </div>
        <div className="footer-bottom bg-black text-white py-5">
            <Container>
                <Row className='align-items-center g-4 text-center text-lg-start'>
                    { data && data.copyright && <div className="col-lg">
                        <div className="copyright-content fs-xl-lg">{ data.copyright.text }</div>
                    </div>}
                    { data && data.social && <div className="col-lg-auto">
                        <ul className="social-list list-unstyled mb-0">
                            {data.social.map(( item, key) => (
                            <li key={key} className="list-item">
                                <a href={item.slug} title={item.name}>{item.icon}</a>
                            </li>
                            ))}
                        </ul>
                    </div>}
                </Row>
            </Container>
        </div>
    </motion.footer>
  )
}

export default Footer