import React, { useContext } from 'react';

import MainRoutes from './main.routes';
import AuthRoutes from './auth.routes';


const Routes = ()=>{

    const signed = true;

    return signed ? <MainRoutes /> : <AuthRoutes />;

}

export default Routes;