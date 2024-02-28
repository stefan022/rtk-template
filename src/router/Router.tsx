import React from 'react';

import {
    BrowserRouter,
    Routes as BrowserRoutes,
    Route,
} from 'react-router-dom';

import { Home, NotFound } from '../pages';
import PrivateLayout from '../layouts/private/PrivateLayout';
import AppRoutes from './Routes';

const Router: React.FC = (): JSX.Element => {
    return (
        <BrowserRouter>
            <BrowserRoutes>
                <Route
                    path={AppRoutes.HOME}
                    element={
                        <PrivateLayout>
                            <Home />
                        </PrivateLayout>
                    }
                />
                <Route path={AppRoutes.NOF_FOUND} element={<NotFound />} />
            </BrowserRoutes>
        </BrowserRouter>
    );
};

export default Router;
