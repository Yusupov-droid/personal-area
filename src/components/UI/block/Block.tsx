import './Block.scss';
import React from 'react';

const Block: React.FC = (props) => {
    return (
        <div className="block block--space">
            <div className="block__inner">{props.children}</div>
        </div>
    );
};

export default Block;
