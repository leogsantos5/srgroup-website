import React from 'react';
import './SRGroup.css';
import SRGroupLogo from '../../assets/SRGroupLogoTransparent2.png';
import EcoCleaningLogo from '../../assets/EcoCleaningLogo.png';
import InstanbulLogo from '../../assets/InstanbulKebabLogo.png';
import EcoTextLogo from '../../assets/EcoTexLogo.png';
import EcoCleaningService from '../../assets/EcoCleaningService.png';
import BrasileiraImg from '../../assets/21.png';
import UMAImg from '../../assets/22.png';
import JNCQUOIImage from '../../assets/16.png';
import MImage from '../../assets/23.png';

const SRGroup = () => {
    const companies = [
        { id: 1, image: SRGroupLogo },
        { id: 2, image: EcoCleaningLogo },
        { id: 3, image: InstanbulLogo },
        { id: 4, image: EcoTextLogo },
        { id: 5, image: EcoCleaningService },
    ];

     const partners = [
        { id: 6, image: BrasileiraImg },
        { id: 7, image: JNCQUOIImage },
        { id: 8, image: UMAImg },
        { id: 9, image: MImage },
    ];

    const reviews = [
    {
        id: 1,
        text: <span><strong>Experiência excepcional de hospedagem!</strong> A empresa de gestão de alojamento local foi incrível em todos os aspectos. Desde a comunicação eficiente até a limpeza impecável, tudo foi cuidadosamente organizado.</span>,        name: "João Marques",
        rating: 5
    },
    {
        id: 2,
        text: <span><strong>Profissionalismo exemplar e atenção aos detalhes!</strong> Fiquei impressionado com o profissionalismo e a dedicação de toda a equipa.</span>,
       name: "Júlia Silva",
        rating: 5
    },
    {
        id: 3,
        text: <span><strong>Serviço de qualidade e localização perfeita!</strong> A Minha estadia excedeu todas as minhas expectativas. O serviço foi excepcional, desde a reserva até o check-out.</span>,         name: "Carla Matos",
        rating: 5
    }
];

    return (
        <div className="companies-container">
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 15}}>
                <hr style={{borderTop: '2px solid black', width: '92%'}}/>
            </div>
            <h1 className='companies-title'>As Nossas Empresas:</h1>
            <div className="companies-grid">
                {companies.map(company => (
                    <div key={company.id} className="company-item">
                        <img src={company.image}/>
                    </div>
                ))}
            </div>
            <div style={{display: 'flex', justifyContent: 'center', marginBottom: 5, marginTop: 15}}>
                <hr style={{borderTop: '2px solid black', width: '92%'}}/>
            </div>
            <h1 className='companies-title'>Parceiros:</h1>
            <div className="companies-grid partners">
                {partners.map(partner => (
                    <div key={partner.id} className="company-item">
                        <img src={partner.image} />
                    </div>
                ))}
            </div>
            <div className='reviews reviews-bg'>
                <h1>Reviews:</h1>
                <div className='reviews-cards'>
                    {reviews.map(review => (
                        <div key={review.id} className='review-card'>
                            <p>{review.text}</p>
                            <div className='review-author'>
                                <h3>{review.name}</h3>
                                <div className="stars">
                                    {Array(review.rating).fill().map((_, i) => (
                                        <span key={i}>⭐</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SRGroup;