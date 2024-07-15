import React from 'react';
import businessImg from '../images/business.jfif';
import softwareImg from '../images/software.jfif';
import technologyImg from '../images/technology.jfif';
import healthcareImg from '../images/healthcare.jfif';
import educationImg from '../images/education.jfif';
import financeImg from '../images/finance.jfif';
import environmentImg from '../images/environment.jfif';
import transportationImg from '../images/transportation.jfif';
import entertainmentImg from '../images/entertainment.jfif';

const facts = [
    { id: 1, category: 'Business', fact: 'The global ecommerce market is expected to reach $4.89 trillion in 2021.', description: 'E-commerce is growing rapidly worldwide.' },
    { id: 2, category: 'Software Engineering', fact: 'The first computer virus was created in 1983.', description: 'The history of computer viruses is fascinating.' },
    { id: 3, category: 'Technology', fact: 'More data has been created in the past two years than in the entire previous history of the human race.', description: 'The era of big data is upon us.' },
    { id: 4, category: 'Healthcare', fact: 'Telemedicine is expected to grow to a $185 billion industry by 2026.', description: 'The future of healthcare is digital.' },
    { id: 5, category: 'Education', fact: 'Online learning is projected to be a $325 billion industry by 2025.', description: 'The rise of online education is transforming learning.' },
    { id: 6, category: 'Finance', fact: 'Bitcoin’s market capitalization hit $1 trillion in 2021.', description: 'Cryptocurrency is revolutionizing finance.' },
    { id: 7, category: 'Environment', fact: 'Renewable energy sources are expected to provide 30% of global electricity by 2025.', description: 'The shift to renewable energy is accelerating.' },
    { id: 8, category: 'Transportation', fact: 'Self-driving cars could save 29,447 lives annually in the US.', description: 'Autonomous vehicles are the future of transportation.' },
    { id: 9, category: 'Entertainment', fact: 'The global video game market is expected to reach $159.3 billion in 2020.', description: 'The gaming industry is booming.' },
];

const getImage = (category) => {
    switch (category) {
        case 'Business':
            return businessImg;
        case 'Software Engineering':
            return softwareImg;
        case 'Technology':
            return technologyImg;
        case 'Healthcare':
            return healthcareImg;
        case 'Education':
            return educationImg;
        case 'Finance':
            return financeImg;
        case 'Environment':
            return environmentImg;
        case 'Transportation':
            return transportationImg;
        case 'Entertainment':
            return entertainmentImg;
        default:
            return technologyImg;
    }
};

const FactsCards = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                {facts.map(fact => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={fact.id}>
                        <div className="card">
                            <img src={getImage(fact.category)} className="card-img-top" alt={fact.category} />
                            <div className="card-body">
                                <h5 className="card-title">{fact.category}</h5>
                                <p className="card-text">{fact.fact}</p>
                                <p className="card-text"><small className="text-muted">{fact.description}</small></p>
                                <a href="/about" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FactsCards;
