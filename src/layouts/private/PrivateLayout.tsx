import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const PrivateLayout: React.FC<IProps> = ({ children }): JSX.Element | null => {
    // add functionality

    return <div>{children}</div>;
};

export default PrivateLayout;
