import './Services.css';
import ConsultoriaImobImg from '../../assets/6.png';
import CityAlleyImg from '../../assets/5.png';
import ConsultoriaImg from '../../assets/4.png';
import ALManagImg from '../../assets/16.jpg';
import WashingImg from '../../assets/1.png';
import CleaningImg from '../../assets/2.png';
import PropertyLeftImg from '../../assets/20.png';
import PropertyCenterImg from '../../assets/18.png';
import PropertyRightImg from '../../assets/17.png';
import RepairementsImg from '../../assets/3.png';

const Services = () => {
    const services = [
        { id: 1, title: 'Consultoria Imobiliária', image: ConsultoriaImobImg },
        { id: 2, title: 'Consultoria', image: ConsultoriaImg },
        { id: 3, title: 'Gestão de Alojamneto Local', image: ALManagImg },
        { id: 4, title: 'Lavandaria', image: WashingImg },
        { id: 5, title: 'Limpeza', image: CleaningImg },
        { id: 6, title: 'Reparações', image: RepairementsImg },
    ];

    const properties = [
        { id: 1, title: 'Look Hotel', address: 'Rua da Boavista 69, 1200-085 Lisboa', image: PropertyLeftImg },
        { id: 2, title: 'Rossio Boutique Hotel', address: 'Calçada do Carmo 6, 2nd floor', image: PropertyCenterImg },
        { id: 3, title: 'Casa dell\'Arte Club House', address: 'Campo de Santa Clara 125, São Vicente', image: PropertyRightImg },
    ];

    const servicesText = 'Juntos estamos cada vez mais perto do sucesso para o seu negócio!';

    return (
         <div className="services-container">
            <h1>Os Nossos Serviços:</h1>
            <div className="services-grid">
                {services.map(service => (
                    <div key={service.id} className="service-item">
                        <img src={service.image} alt={service.title} />
                        <h3>{service.title}</h3>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 50}}>
                <hr style={{borderTop: '2px solid black', width: '100%'}}/>
            </div>
            <div className="flex-container">
                <div className="flex-item services-text">
                    <p>{servicesText}</p>
                </div>
                <div className="flex-item">
                    <img src={CityAlleyImg} alt="Some image" />
                </div>
            </div>
            <h1>Imóveis em Destaque:</h1>
            <div className="properties-grid">
                {properties.map(property => (
                    <div key={property.id} className="property-item">
                        <div className="property-content">
                            <img src={property.image} alt={property.title} />
                            <h3>{property.title}</h3>
                            <p>{property.address}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;