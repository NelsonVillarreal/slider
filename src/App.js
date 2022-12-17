import ImageSlider from "./ImageSlider";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footer/Footer';


const App = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", href: "", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
    { url: "http://localhost:3000/image-4.jpg", title: "city" },
    { url: "http://localhost:3000/image-5.jpg", title: "italy" },
  ];
  const containerStyles = {
    width: "1280px",
    height: "230px",
    margin: "0 auto", 

  };
  return (
    <div>
      <h1> </h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      <Footer>
      </Footer>
      </div>
    </div>
  );
};



export default App;
