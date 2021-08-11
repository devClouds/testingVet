import React, {useState} from 'react'
import { HiChevronDoubleUp } from 'react-icons/hi'

function ScrollTopButton() {

    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
          } 
          else if (scrolled <= 300){
            setVisible(false)
          }
        };
    
    

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
      
      window.addEventListener('scroll', toggleVisible);

    return (
        <button 
            id="scroll-top-button" 
            title="Go to the top"
            style={{display: visible ? 'inline-block' : 'none'}} 
            onClick={scrollToTop}>
                <HiChevronDoubleUp/>
        </button>
    )
}

export default ScrollTopButton
