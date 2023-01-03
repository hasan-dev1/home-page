import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const HomeBanner = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto mt-2">
        <Splide
          options={{
            rewind: true,
            width: "100vw",
            height: "60vh",
            gap: "1rem",
            autoplay: true,
            type: "loop",
            pauseOnHover: false,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide data-splide-interval="2000">
            <img className="w-full h-full" src="groceryone.jpg" alt="groceryone" />
          </SplideSlide>
          <SplideSlide data-splide-interval="2000">
            <img className="w-full h-full" src="grocerytwo.jpg" alt="grocerytwo" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default HomeBanner;
