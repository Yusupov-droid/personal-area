import './Main.scss';
import React from 'react';

const Container: React.FC = ({ children }) => {
    return (
        <div className="main">
            <div className="main__container">{children}</div>
        </div>
    );
};

export default Container;
