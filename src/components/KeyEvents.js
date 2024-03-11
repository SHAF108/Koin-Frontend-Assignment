import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KeyEvents = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
  return (
    <section className='ml-5 my-3 pl-3'>
        <div>
            <div className='slider-container'>
                <Slider {...settings}>
                    <div className='flex  bg-blue-200 p-4 rounded-xl mr-4'>
                        <div className='pt-2 m-3 '>
                            <span className='bg-blue-500 text-2xl p-2  text-white  rounded-full'><ion-icon name="newspaper-outline"></ion-icon></span>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-[15px] font-semibold leading-5'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h2>
                            </div>
                            <div className='my-2'>
                                <p className='text-[13px] font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex  bg-blue-200 p-4 rounded-xl'>
                        <div className='pt-2 m-3 '>
                            <span className='bg-blue-500 text-2xl p-2 text-white  rounded-full'><ion-icon name="newspaper-outline"></ion-icon></span>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-[15px] font-semibold leading-5'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h2>
                            </div>
                            <div className='my-2'>
                                <p className='text-[13px] font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex w-[55%] bg-blue-200 p-4 rounded-xl'>
                        {/* <ion-icon name="chevron-forward-circle-outline"></ion-icon> */}
                        <div className='pt-2 m-3 '>
                            <span className='bg-blue-500 text-2xl p-2 text-white  rounded-full'><ion-icon name="newspaper-outline"></ion-icon></span>
                        </div>
                        <div className=''>
                            <div>
                                <h2 className='text-[15px] font-semibold leading-5'>Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.</h2>
                            </div>
                            <div className='my-2'>
                                <p className='text-[13px] font-semibold text-gray-600 '>Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.</p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
                
            
        </div>
        
    </section>
  )
}

export default KeyEvents
