import React from "react";
import Images from "./../assets/images/karine-germain-iIWCjgK3704-unsplash.jpg";
import Public from "../Layouts/Public";

const Home = () => {
  return (
    <>
      <Public>
        <section>
          <img className="bg-cover" src={Images} alt="" />
          <div className="container flex flex-col">
            <div className="text-center mb-5">
              <h1 className="text-3xl font-semibold pt-4">
                Welcome To Market Info
              </h1>
              {/* <img className="" src={Images} alt="" /> */}
            </div>
            <div className="flex justify-center h-5/6">
              <h2 className="max-w-3xl text-lg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque
                eligendi praesentium reprehenderit excepturi, autem ipsa dolorum
                corrupti dolore corporis quos aspernatur quo sequi, et dicta,
                eum quaerat in facere aliquid!
              </h2>
            </div>
          </div>
        </section>
      </Public>
    </>
  );
};

export default Home;
