import { NextPage } from "next";
import { seoConfig } from "./Utils";
// import SEO from '../components/SEO';
import Calculator from "./Calculator";
import { useContext } from "react";
import { CounterContext } from "./Context";
import Attribution from "./Atribution";

const HomePage: NextPage = () => {
  const { counter } = useContext(CounterContext);

  const themes = ["dark__theme", "light__theme", "funky"];

  return (
    <>
      {/* <SEO {...seoConfig} /> */}
      <main className={`app__container ${themes[counter]}`}>
        <div className="wrapper">
          <Calculator />
          <Attribution />
        </div>
      </main>
    </>
  );
};

export default HomePage;
