import { useState, useEffect } from 'react'
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [gapSize, setGapSize] = useState(10); // Default gap size
  const [fontSize, setFontSize] = useState(20); // Default font size

    useEffect(() => {
        const calculateFontSize = () => {
            const screenWidth = window.innerWidth;
            const minWidth = 320; // Minimum screen width
            const maxWidth = 1440; // Maximum screen width
            const minFontSize = 20; // Minimum font size
            const maxFontSize = 35; // Maximum font size
            const calculatedFontSize = minFontSize + ((maxFontSize - minFontSize) / (maxWidth - minWidth)) * (screenWidth - minWidth);
            setFontSize(calculatedFontSize);
        };
        calculateFontSize();
        const handleResize = () => {
            calculateFontSize();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    useEffect(() => {
        const calculateGapSize = () => {
            const screenWidth = window.innerWidth;
            const minWidth = 320; // Minimum screen width
            const maxWidth = 1440; // Maximum screen width
            const minGap = 10; // Minimum gap size
            const maxGap = 100; // Maximum gap size
            const calculatedGapSize = minGap + ((maxGap - minGap) / (maxWidth - minWidth)) * (screenWidth - minWidth);
            setGapSize(calculatedGapSize);
        };

        calculateGapSize();
        const handleResize = () => {
            calculateGapSize();
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
  return (
      <div className='navbar'>
      <ul className="nav-menu" style={{ gap: `${gapSize}px`, fontSize: `${fontSize}px` }}>
            <Link to="whoweare" spy={true} smooth={true} duration={200} offset={-100}>Quem Somos?</Link>
            <Link to="services" spy={true} smooth={true} duration={200} offset={45}>Serviços</Link>
            <Link to="srgroup" spy={true} smooth={true} duration={200} offset={+5}>SR Group</Link>
            <Link to="contacts" spy={true} smooth={true} duration={200} offset={+60}>Contactos</Link>
          </ul>
      </div>
  )
}

export default Navbar