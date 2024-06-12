import './WhoWeAre.css';
import SRGroupLogo from '../../assets/SRGroupLogoTransparent2.png';
import bedroomImage from '../../assets/7.png';

const WhoWeAre = () => {
    const description = 'Na SR GROUP, somos parceiros autênticos dedicados a oferecer soluções completas e inovadoras em diversos setores. Com uma abordagem integrada e foco na excelência, atuamos em múltiplas áreas para atender às necessidades dos nossos clientes.'
    const title = <span className="arrow">Quem Somos?</span>;
    return (
        <div className="who-we-are">
            <div className="full-screen-image">
                <img src={SRGroupLogo} alt="Company Logo" className="logo" />
            </div>  
            <div className="whoweare-container" >
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
            </div>
            <img src={bedroomImage} className="roomImage" />
        </div>
    );
};

export default WhoWeAre;
