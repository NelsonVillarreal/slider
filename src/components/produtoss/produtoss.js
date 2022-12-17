import React from "react";
import { Link } from "react-router-dom";
import "./produtoss.css"


const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12,image13, image14, image15, image16, image17, image18]
function App() {
   const carousel = useRef();
   const [width, setWidth] = useState(0)
  

   useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
   }, [])


  return (
    
    <div className="App">

      

      <motion.div ref={carousel} className="carousel" whileTap={{cursor:"grabbing"}}>
      <motion.div className="Parrafo"> <h1>Productos Mais Vendidos </h1></motion.div>
        <motion.div 
        className="inner" 
        drag="x"
        dragConstraints={{ right: 0, left: -width}}
        initial={{ x: 100}}
        animate={{ x: 0}}
        transition={{ duration: 0.8}}
        
        
        >

          {images.map( image => (
            <motion.div className='item' key={image}>
              <img src={image} alt="Texto alt"/>
              <h1>  Producto </h1>

            </motion.div>
          ) )
          }

          export default produtoss;

