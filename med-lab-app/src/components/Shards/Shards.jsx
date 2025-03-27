import React from 'react';
import './Shards.css'; 

const Shards = () => {
  const cards = [
    {
      id: 1,
      image: '/rating.png',
      title: '5 Star Rating',
      description: 'We have a 5-Star rating on Google, so you can be sure that you are getting the best possible service.',
    },
    {
      id: 2,
      image: '/12.png',
      title: 'Report in 12 Hours',
      description: 'We will provide you with a test report in just 12 hours, so you can get the results you need quickly.',
    },
    {
      id: 3,
      image: '/13.png',
      title: 'Modern Machines',
      description: 'Our lab is equipped with the latest and most modern lab machines.',
    },
    {
      id: 4,
      image: '12.png',
      title: 'Open 12 Hours',
      description: 'We are open 12 hours every day, so you can get your tests done whenever you need them.',
    },
    {
      id: 5,
      image: '/wallet.png',
      title: 'Pocket Friendly',
      description: 'We are also pocket-friendly, so you can get the best value for your money.',
    },
    {
      id: 6,
      image: '/doctor.png',
      title: 'Certified Doctors',
      description: 'Our lab is staffed by certified doctors and technicians who use the latest and most modern lab machines.',
    },
  ];

  return (
    <div className="shard-grid-container">
        <div className="section-heading-container">
      <h1 className="section-heading">Why Choose Us ?</h1>
      </div>
      <div className="shard-grid">
        {cards.map(card => (
          <div className="custom-shard" key={card.id}>
            <img src={card.image} alt={card.title} className="shard-image" />
            <h3 className="shard-title">{card.title}</h3>
            <p className="shard-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shards;
