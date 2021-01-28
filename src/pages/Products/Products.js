import React from 'react';
import { InfoSection } from '../../components';
import { homeObj3, homeObj4 } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObj3} />
            <InfoSection {...homeObj4} />
         
        </>
    )
}

export default Home;
