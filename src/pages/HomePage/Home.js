import React from 'react';
import { InfoSection,} from '../../components';
import HeroSection from '../../components/HeroSection';
import { homeObj1, homeObj2} from './Data';

const Home = () => {
    return (
        <>
            <HeroSection/>
            <InfoSection {...homeObj1} />
            <InfoSection {...homeObj2} />
        </>
    )
}

export default Home;
