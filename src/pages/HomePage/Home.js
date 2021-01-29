import React from 'react';
import { InfoSection,} from '../../components';
import { homeObj1, homeObj2} from './Data';

const Home = () => {
    return (
        <>
            <InfoSection {...homeObj1} />
            <InfoSection {...homeObj2} />
        </>
    )
}

export default Home;
