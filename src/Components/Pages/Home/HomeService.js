import { Splide, SplideSlide } from '@splidejs/react-splide';
import React, { useEffect, useState } from 'react';
import Spinner from '../../Spinner/Spinner';

const HomeService = () => {
  const [loading, setLoading] = useState(false)
    const [fakedata, setFakeData] = useState()
      useEffect(() => {
        setLoading(true)
        fetch(`fakedata.json`)
          .then((res) => res.json())
          .then((data) => {
            setFakeData(data[0])
            setLoading(false)
          })
          .catch(err => {
            console.log(err)
            setLoading(false)
          })
      }, []);

    return (
      <div>
        {loading ? (
          <Spinner></Spinner>
        ) : (
          <div className="w-4/5 mx-auto px-6 my-12">
            <div className="w-1/2  my-6 text-primary">
              <h3 className="text-xl font-bold ">Service We Provide</h3>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
            <Splide
              options={{
                rewind: true,
                perPage: 6,
                perMove: 1,
                width: "auto",
                gap: "1rem",
              }}
              aria-label="My Favorite Images"
            >
              {fakedata?.service?.map((item, idx) => (
                <SplideSlide key={idx}>
                  <div className="rounded pb-6 ">
                    <img
                      className="w-full h-[10rem] pb-2"
                      src={item?.icon}
                      alt="Image2"
                    />
                    <h4 className="text-primary text-center">{item?.name}</h4>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        )}
      </div>
    );
};

export default HomeService;