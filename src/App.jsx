import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Colaborators from "./components/Colaborators/Colaborators.jsx";
import Reasons from "./components/Reasons/Reasons.jsx";
import Steps from "./components/Steps/Steps.jsx";
import Faqs from "./components/Faqs/Faqs.jsx";
import Workers from "./components/Workers/Workers.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Whatsapp from "./components/Whatsapp/Whatsapp.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Colaborators />
      <Workers />
      <Reasons />
      <Steps />
      <Faqs />
      <Footer />
      <Whatsapp />
    </>
  );
};
export default App;
