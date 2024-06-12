import CustomNavbar from './Components/Navbar/Navbar'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import Services from './Components/Services/Services';
import SRGroup from './Components/SRGroup/SRGroup';
import Contacts from './Components/Contacts/Contacts';
import { HashRouter } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <div>
        <CustomNavbar/>
        <section id="whoweare"><WhoWeAre /></section> 
        <section id="services"><Services /></section>
        <section id="srgroup"><SRGroup /></section>
        <section id="contacts"><Contacts /></section>
      </div>
    </HashRouter>
  );
};

export default App; // Export App as the default export
