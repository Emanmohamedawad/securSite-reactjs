import React from 'react';
import Carousel from '../Components/Carousel/Carousel';
import { Content } from '../Components/Content/Content';
import Features from '../Components/Features/Features';
import Hero from '../Components/Hero/Hero';
 import { heroOne, heroTwo, heroThree } from '../Data/HeroData';

// Hero Feature Content Carousel

const Home = () => {
	return (
        // <Hero />
		 <>
		 	<Hero />
		 	<Features /> 
		 	<Content {...heroOne} />
		 	<Content {...heroTwo} />
		 	<Content {...heroThree} />
		 	<Carousel /> 
		 </>
	);
};

export default Home;