import React from 'react';
import { InfoSection } from '../../components';
import { homeObj2, homeObj3} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObj2} />
            <InfoSection {...homeObj3} />
        </>
    )
}

export default Home;
