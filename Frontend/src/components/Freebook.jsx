import React from 'react';
import list from '../../public/list.json';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';
import Footer from './Footer';

function Freebook() {
  const filterData= list.filter((data) => data.category==="Free");
  var  settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
  };
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div>
      <h1 className='font-semibold text-xl pb-2'>
        Our Stuff
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolore, vel magnam repellendus mollitia facilis quasi ad eum adipisci! Numquam quidem praesentium consectetur repudiandae officia esse, tenetur sunt ut cumque!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos reiciendis laboriosam ea obcaecati nulla corrupti.
      </p>
      </div>
    
    <div>
    
    <Slider {...settings}>
      {filterData.map((item)=>(
        <div className='py-10'>
          <Cards item={item} key={item.id}/>
        </div>
      ))}
      </Slider>
    </div>
    </div>
    </>
  );

}

export default Freebook;
