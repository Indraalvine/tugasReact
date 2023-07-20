import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { fetchApiTodo } from "../Services/ProductService";
import Cards from "../Components/Cards/Cards";

const Products = () => {
  const [data, setData] = useState({});

  const getData = async () => {
    const newData = await fetchApiTodo();
    setData(newData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <section>
        <div className="flex flex-wrap gap-5 justify-center">
          {data.products?.map((item, index) => (
            <Cards
              key={index}
              image={item.images?.[0]}
              brand={item.category}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
