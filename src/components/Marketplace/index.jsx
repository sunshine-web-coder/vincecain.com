import React from 'react';
import SHAPE_1 from './shape-1.png';

const Marketplace = () => {
    const data = {
        text: "Our <span class='ff-secondary'>Freelance <br />marketplace</span> beta",
        content: 'The vince freelance market place released earlier is <br class="d-none d-md-block"/>powered by the Vince Token and chain.',
        button: {
            label: "Sign Up",
            slug: "https://vincefreelancer.com"
        }
    }
  return (
    <section className="marketplace-section py-5 py-lg-7 text-center text-md-start">
        <div className="container-lg">
            <div className="row gy-5 align-items-center">
                <div className="col-12">
                    <div className="marketplace-section-box rounded-3 py-5">
                        {/* SHAPE 1 */}
                        <img src={SHAPE_1} alt="" className="shape-1" style={{ '--banner-max-width' : ' 31vw'}} />

                        <div className="cta-content mt-4 mt-md-0 py-md-3 px-3 px-md-5 px-lg-6">
                            {data && data.text && <h2 className='ff-tertiary fs-4xl fs-sm-5xl fs-md-6xl mb-3' dangerouslySetInnerHTML={{__html: data.text}}></h2>}
                            {data && data.content && <div className='fs-md-lg mb-3 mb-lg-4' dangerouslySetInnerHTML={{__html: data.content }}></div>}
                            {data && data.button && <a href={data.button.slug} className='btn btn-primary'>{data.button.label}</a>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  )
}

export default Marketplace