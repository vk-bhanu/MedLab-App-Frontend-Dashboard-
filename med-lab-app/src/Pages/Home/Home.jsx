import React from 'react';
import Body from '../../components/Body/Body';
import Stats from '../../components/Stats/Stats';
import Cards from '../../components/Cards/Cards';
import Shards from '../../components/Shards/Shards';
import ContactUs from '../../components/ContactUs/ContactUs';

const Home = () => {
  return (
    <div>
      <Body />
      <Stats />
      <Cards />
      <Shards />
      <ContactUs />
    </div>
  );
};

export default Home;
