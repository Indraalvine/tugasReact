import React from "react";
import Public from "../Layouts/Public";

const Home = () => {
  return (
    <>
      <Public>
        <section className="bg-[url(/images/Home.jpg)] bg-cover h-screen flex justify-center items-center">
          <div className="container flex flex-col text-white">
            <div className="text-center mb-5">
              <h1 className="text-5xl font-bold pt-4">
                Welcome To Market.Info
              </h1>
            </div>
            <div className="flex justify-center h-5/6">
              <h2 className="max-w-4xl font-semibold text-2xl">
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
