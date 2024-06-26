import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import { css } from '@emotion/react';
import { useEffect } from "react";

// Define the CSS using Emotion
const styles = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .slider-container {
    overflow: hidden;
    width: 100%;
  }

  .slider-wrapper {
    display: flex;
    width: 200%; /* To account for the duplicate slides */
    animation: scroll 20s linear infinite;
  }

  .slide {
    flex: 0 0 auto;
    width: 16.6667%; /* 1/6th of the container width */
    box-sizing: border-box;
  }

  .img-fluid {
    width: 100%;
    height: auto;
    display: block;
  }
  .img-fluid2 {
    width: 50%;
    height: auto;
    display: block;
  }
`;



const clients = [
    "/assets/images/client-1.png",
    "/assets/images/client-2.png",
    "/assets/images/client-3.png",
    "/assets/images/client-4.png",
    "/assets/images/client-5.png",
    "/assets/images/client-6.png",
    "/assets/images/client-1.png", // Duplicate for seamless looping
    "/assets/images/client-2.png", // Duplicate for seamless looping
    "/assets/images/client-3.png", // Duplicate for seamless looping
    "/assets/images/client-4.png", // Duplicate for seamless looping
    "/assets/images/client-5.png", // Duplicate for seamless looping
    "/assets/images/client-6.png"  // Duplicate for seamless looping
  ];
  
  export default function ClientSlider() {
    useEffect(() => {
      // Append styles to the head
      const styleSheet = document.createElement("style");
      styleSheet.type = "text/css";
      styleSheet.innerText = styles;
      document.head.appendChild(styleSheet);
    }, []);
  
    return (
      <div className="slider-container">
        <div className="slider-wrapper">
          {clients.map((client, index) => (
            <div className="slide" key={index}>
              <img src={client} className="2" alt={`Client ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
