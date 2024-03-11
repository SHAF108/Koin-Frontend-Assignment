import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const YouMayAlsoLike = () => {
  // var settings = {
  //   dots: false,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 3,
  // };
  return (
    <section className='bg-white w-full  rounded pt-10 pl-10 '>
      <div>
      
      <div className='p-4 '>
          <h1 className='text-2xl font-semibold'>You May Also Like </h1>
          <div className='slider-container'>
          {/* <Slider {...settings}> */}
            <div className='flex md:flex-row mt-4'>
              <div className='mb-2 mr-4'>
                <img className=' rounded-lg' src='https://new-blog.koinx.com/wp-content/uploads/2024/01/featured-images-02-09-768x384.jpg'/>
              </div>
              <div className='  mr-4'>
                <img className=' rounded-lg' src='https://new-blog.koinx.com/wp-content/uploads/2024/01/featured-image-2024-20-768x384.jpg'/>
              </div>
              <div className='hidden md:block mr-4'>
                <img className='md:w-[625px] md:h-[124px] rounded-lg' src='https://new-blog.koinx.com/wp-content/uploads/2024/01/featured-images-02-10-1536x768.jpg'/>
              </div>
              <div className='hidden md:block mr-4'>
                <img className=' rounded-lg' src='https://new-blog.koinx.com/wp-content/uploads/2024/01/featured-images-02-04-768x384.jpg'/>
              </div>
              <div className='hidden md:block mr-4'>
                <img className=' rounded-lg' src='https://new-blog.koinx.com/wp-content/uploads/2024/01/featured-image-03-10-768x384.jpg'/>
              </div>
            </div>
          {/* </Slider> */}
          </div>
          
        </div>
        
        <div className='p-4 '>
          <h1 className='text-2xl font-semibold'>Trending Coins</h1>
          <div className='flex mt-4 my-8'>
            <div className='mb-2 mr-4'>
              <img className=' rounded-lg' src='https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkoinxInNews1.cdf9ab35.jpg&w=3840&q=75'/>
            </div>
            <div className='mb-2 mr-4'>
              <img className=' rounded-lg' src='https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkoinxInNews1.cdf9ab35.jpg&w=3840&q=75'/>
            </div>
            <div className='hidden md:block mb-2 mr-4'>
              <img className=' rounded-lg' src='https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkoinxInNews1.cdf9ab35.jpg&w=3840&q=75'/>
            </div>
            <div className='hidden md:block mb-2 mr-4'>
              <img className=' rounded-lg' src='https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkoinxInNews1.cdf9ab35.jpg&w=3840&q=75'/>
            </div>
            <div className='hidden md:block mb-2 mr-4'>
              <img className=' rounded-lg' src='https://www.koinx.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FkoinxInNews1.cdf9ab35.jpg&w=3840&q=75'/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouMayAlsoLike
