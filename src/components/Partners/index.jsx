import React from 'react';
import logo1 from './images/1.png';
import logo2 from './images/2.png';
import logo3 from './images/3.png';
import logo4 from './images/4.png';
import logo5 from './images/5.png';
// Import Swiper React components

const Partners = () => {
    const data = {
        logos: [
            { url : logo1 },
            { url : logo2 },
            { url : logo3 },
            { url : logo4 },
            { url : logo5 },
        ]
    }
  return (
    <section className='pb-5 pb-lg-7'>
        <div className="container-lg">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-title mb-5 text-center">
                        <h2 className="fs-4xl fs-lg-6xl text-black fw-bold mb-3">Partner</h2>
                    </div>
                </div>
            </div>
            <div className="row g-4 justify-content-center justify-content-xl-between">
                {data && data.logos && data.logos.map(( item, key ) => (
                    <div className='col-6 col-sm-auto' key={key}>
                        <div className="d-flex align-items-center justify-content-center h-100">
                            <img src={item.url} className="img-fluid" alt="PARTNER" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Partners