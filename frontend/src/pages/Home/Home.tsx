import React, { FunctionComponent } from 'react';

import { Menu } from './parts/Menu/container';
import { HomeProps } from './Home.types';

const Home: FunctionComponent<HomeProps> = () => {
    return (
        <>
            <Menu />
        </>
    );
};

export default Home;
