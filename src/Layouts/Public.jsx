import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const Public = ({ children }) => {
  return (
    // Public ngoding disini
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default Public;
