import { useState, useEffect, useRef} from 'react'
import './App.css';
import{ motion } from 'framer-motion'

import image1 from '../src/images/1.jpg'
import image2 from '../src/images/2.jpg'
import image3 from '../src/images/3.jpg'
import image4 from '../src/images/4.jpg'
import image5 from '../src/images/5.jpg'
import image6 from '../src/images/6.jpg'
import image7 from '../src/images/7.jpg'
import image8 from '../src/images/8.jpg'
import image9 from '../src/images/9.jpg'
import image10 from '../src/images/10.jpg'
import image11 from '../src/images/11.jpg'
import image12 from '../src/images/12.jpg'
import image13 from '../src/images/13.jpg'
import image14 from '../src/images/14.jpg'
import image15 from '../src/images/15.jpg'
import image16 from '../src/images/16.jpg'
import image17 from '../src/images/17.jpg'
import image18 from '../src/images/18.jpg'



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



        </motion.div>



      </motion.div>

      
       

 </div>

 
  );
}

export default App;
