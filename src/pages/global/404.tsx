import React from 'react';

import { Link } from 'react-router-dom';
import AppRoutes from '../../router/Routes';
import Container from '../../containers/Container';

const NotFound: React.FC = (): JSX.Element => {
    return (
        <Container>
            <div>
                <h1 className="text-center text-5xl">404</h1>
                <h2>Sorry, page not found!</h2>
            </div>
            <Link to={AppRoutes.HOME}>Go back</Link>
        </Container>
    );
};

export default NotFound;
