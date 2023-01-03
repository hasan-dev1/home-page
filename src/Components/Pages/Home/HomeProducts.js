import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

const HomeProducts = () => {
  const [loading,setLoading] = useState(false)
  const [fakedata, setFakeData] = useState();

  useEffect(() => {
    setLoading(true)
    fetch(`fakedata.json`)
      .then((res) => res.json())
      .then((data) => {
        setFakeData(data[0])
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }, []);

  console.log(fakedata);
  return (
    <div className="w-4/5 mx-auto my-6 px-6 text-primary">
      <div className="w-1/2  my-6">
        <h3 className="text-xl font-bold">Popular products</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>
      {loading ? (
        <Spinner></Spinner>
      ) : (
        fakedata?.products?.map((item, idx) => (
          <div key={idx} className={`bg-slate-100 p-1 rounded mb-2`}>
            <div className="flex justify-between items-center">
              <h3 className=" font-bold mt-4 mb-2">{item?.name}</h3>
              <h3 className=" font-bold mt-4 mb-2">See All</h3>
            </div>
            <Splide
              options={{
                width: "auto",
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                rewind: true,
              }}
            >
              {item?.product?.map((itemone, idx) => (
                <SplideSlide key={idx}>
                  <div className="pb-6 px-4">
                    <img className="w-full" src={itemone?.image} alt="" />
                    <h5>{itemone?.name}</h5>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        ))
      )}
    </div>
  );
};

export default HomeProducts;
