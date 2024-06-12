import './Contacts.css'; // Assuming you have a CSS file for styling
import logo from '../../assets/SRGroupLogoTransparent2.png'; // Assuming this is the path to your logo

function Contacts() {
    return (
        <div className="contacts-container">
            <img src={logo} alt="SR Group Logo" className="SRGroup-logo"/>
            <div className="contact-info">
                <h1>Contactos:</h1>
                <p>Tel: 925775154 & 218132367</p>
                <p>Email:</p>
                <p>Srgroupinvestment@gmail.com</p>
                <p>escritorioselvalilas@gmail.com</p>
            </div>
        </div>
    );
}

export default Contacts;