import React from 'react';
import { InfoSection,} from '../../components';
import { homeObj1, homeObj2, homeObj3, homeObj4 } from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObj1} />
            <InfoSection {...homeObj2} />
            <InfoSection {...homeObj3} />
            <InfoSection {...homeObj4} />
        </>
    )
}

export default Home;
