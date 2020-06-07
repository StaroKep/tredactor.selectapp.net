import React, { FunctionComponent } from 'react';

import { MenuContainer } from 'components';
import { HomeProps } from './Home.types';

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <MenuContainer />
        </>
    );
};

export default Home;
