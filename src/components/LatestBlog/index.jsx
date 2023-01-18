import React from 'react';
import Banner1 from './images/1.jpg';
import Banner2 from './images/2.jpg';
import Banner3 from './images/3.jpg';
import AuthorThumb from './images/author.png';
import Shape from './images/shape.svg';
import { Navigation } from 'swiper';
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const LatestBlog = () => {
    const data = {
        list: [
            { 
                thumb : Banner1,
                title: "VANGOLD SERVICES WILL ACCEPT VINCE TOKEN",
                date: "March 15, 2022",
                slug: "https://link.medium.com/8SmCWtoVhob"
            },
            { 
                thumb : Banner2,
                title: "Characteristics of a productive freelancer",
                date: "Jan 28, 2022",
                slug: "https://medium.com/@vincechainhello-good-day-everyone-we-have-started-this-new-year-in-good-spirit-we-will-see-a-significant-dfdd576a6861"        
            },
            { 
                thumb : Banner3,
                title: "The launch of vince freelancer platform",
                date: "Jan 28, 2022",
                slug: "https://medium.com/@vincechainthe-launch-of-vangold-freelance-platform-the-past-week-marked-an-important-milestone-in-the-838669712df8"          
            },
        ]
    }

  return (
    <motion.section className='py-5 py-lg-6 pb-lg-12 section-blog'
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.4 }}>

        <div className='section-blog-shape'>
            <motion.img src={Shape} alt="" 
                variants={{
                    offscreen: { x: -20, y: 20, opacity: 0, },
                    onscreen: { x: 0, y: 0, opacity: 2,
                        transition: { delay: 0.5, duration: 0.8 }
                    }
                }} />
        </div>


        <div className="container-lg">
            <div className="row gy-5">
                <div className="col-lg-4 col-xl-4 section-blog-heading">
                    <h2 className="ff-tertiary fs-4xl fs-lg-6xl mb-3">The <div className="ff-secondary">Latest Blog</div></h2>
                    <div className="pe-lg-7">
                        <p>Vince Chain is one of the fastest blockchain in the world with low transaction fees, scalable</p>
                    </div>

                    <ul className="list-unstyled d-flex gap-3 mb-0 blog-pagination">
                        <li className="blog-pagination-arrow blog-pagination-prev">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd"></path></svg>
                        </li>
                        <li className="blog-pagination-arrow blog-pagination-next">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-8 col-xl-8">
                    <div className="blog-slider-cover">
                        <Swiper 
                            spaceBetween={20}
                            autoplay={true}
                            breakpoints={{
                                // specify different values for slidesPerView
                                // based on the width of the viewport
                                320: {
                                slidesPerView: 1
                                },
                                768: {
                                slidesPerView: 2
                                },
                                1199: {
                                slidesPerView: 3
                                }
                            }}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            // install Swiper modules
                            modules={[Navigation]}
                            navigation={{
                                nextEl: '.blog-pagination-next',
                                prevEl: '.blog-pagination-prev',
                              }}
                            scrollbar={{ draggable: true }}
                            >
                                {data && data.list && data.list.map(( item, key ) => (
                                <SwiperSlide key={key}>
                                    <div className="card border-0">
                                        <img src={item.thumb} className="card-img-top img-fluid w-100" alt={item.name} />
                                        <div className="card-body p-md-4">

                                            <ul className="list-unstyled d-flex gap-3 align-items-center mb-3">
                                                {/* <li className='d-flex gap-3 align-items-center'>
                                                    <img src={AuthorThumb} alt="" className="" />
                                                    <h5 className="mb-0 fs-md ff-medium">Sam Luc</h5>
                                                </li> */}
                                                <li className='d-flex gap-3 align-items-center ms-auto'>
                                                    <div className='d-flex gap-3 align-items-center'>
                                                        <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <circle cx="19.3466" cy="19.2889" r="19.2889" fill="black"/>
                                                            <path d="M14.8526 18.3898H16.6505V20.1877H14.8526V18.3898ZM27.4378 13.8951V26.4803C27.4378 27.4691 26.6288 28.2782 25.6399 28.2782H13.0547C12.5779 28.2782 12.1206 28.0888 11.7834 27.7516C11.4463 27.4144 11.2568 26.9571 11.2568 26.4803L11.2658 13.8951C11.2658 12.9063 12.0569 12.0972 13.0547 12.0972H13.9537V10.2993H15.7516V12.0972H22.9431V10.2993H24.741V12.0972H25.6399C26.6288 12.0972 27.4378 12.9063 27.4378 13.8951ZM13.0547 15.693H25.6399V13.8951H13.0547V15.693ZM25.6399 26.4803V17.4909H13.0547V26.4803H25.6399ZM22.0442 20.1877H23.8421V18.3898H22.0442V20.1877ZM18.4484 20.1877H20.2463V18.3898H18.4484V20.1877Z" fill="white"/>
                                                        </svg>
                                                        <h5 className="mb-0 fs-md ff-medium">{item.date}</h5>    
                                                    </div>
                                                </li>
                                            </ul>
                                            { item.title && <h2 className='fs-lg fs-2xl ff-medium mb-3'>{ item.title }</h2>}
                                            {/* <a href={item.slug} className="text-decoration-underline text-black ff-primary fw-bold">Read More</a> */}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>                    
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default LatestBlog