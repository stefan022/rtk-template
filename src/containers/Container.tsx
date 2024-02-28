import React, { ReactNode } from 'react';

interface IProps {
    children: ReactNode;
}

const Container: React.FC<IProps> = ({ children }): JSX.Element => {
    return (
        <div className="h-screen max-w-[1280px] mx-auto flex flex-col gap-10 items-center justify-center">
            {children}
        </div>
    );
};

export default Container;
