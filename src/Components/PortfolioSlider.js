import React from 'react';

//Slick Slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

//Slider image
import SliderImage_01 from '../Img/Slider-Home/001.jpeg';
import SliderImage_02 from '../Img/Slider-Home/002.jpeg';
import SliderImage_03 from '../Img/Slider-Home/003.jpeg';
import SliderImage_04 from '../Img/Slider-Home/004.jpeg';
import SliderImage_05 from '../Img/Slider-Home/005.jpeg';
import SliderImage_06 from '../Img/Slider-Home/006.jpeg';

//Arrows
import Next from '../Icons/Next';
import Prev from '../Icons/Prev';

//Styles
import './PortfolioSlider.scss'

function PortfolioSlider(){

    //Custom arrows
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-prev slick-arrow" +
            (currentSlide === 0 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === 0 ? true : false}
          type="button"
          id="prevSlide"
        >
          <Prev />
        </button>
      );

      const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
        <button
          {...props}
          className={
            "slick-next slick-arrow" +
            (currentSlide === slideCount - 1 ? " slick-disabled" : "")
          }
          aria-hidden="true"
          aria-disabled={currentSlide === slideCount - 1 ? true : false}
          type="button"
          id="nextSlide"
        >
          <Next />
        </button>
      );

    const settings ={
        dots:false,
        arrows:true,
        prevArrow:<SlickArrowLeft />,
        nextArrow:<SlickArrowRight />,
        autoplay:false,
        slidesToShow:3,
        slidesToScroll:3,
        variableWidth:true,
        responsive: [
            {
              breakpoint: 1100,
              settings: {
                variableWidth:false
              }
            },
            {
              breakpoint:950,
              settings: {
                slidesToShow:2,
                slidesToScroll:2,
                variableWidth:false
              }
            },
            {
              breakpoint:500,
              settings: {
                slidesToShow:1,
                slidesToScroll:1,
                variableWidth:false
              }
            }
          ]
    }

    return(
        <div className="portfolioSlider">
            <Slider {...settings}>
                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_01} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/* <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>

                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_02} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/* <p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>

                
                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_03} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/*<p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>

                
                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_04} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/*<p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>

                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_05} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/*<p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>

                
                <div className="slide">
                  <div className="content">
                  <img src={SliderImage_06} alt="portfolio-example" />
                    <div className="text">
                        <p>Plan de Construction</p>

											{/*<p>Toffee wafer sesame snaps sugar plum jelly danish cake bear claw pie. Sweet roll jelly-o-biscuit tart bonbon pastry bonbon. Powder sweet cheesecake jelly beans halvah. Chocolate bar.</p>*/}

                        <a href="#sa">Plus de Detail</a>
                    </div>  
                  </div>

                </div>
                
            </Slider>
        </div>
    )
}

export default PortfolioSlider;
