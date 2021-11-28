import './Button.scss';

import React from 'react';

type PropsButton = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
type Props = {
    width?: string;
    height?: string;
    role: 'primary' | 'danger' | 'dark' | 'secondary';
};
const Button: React.FC<Props & PropsButton> = (props) => {
    const { width, height, role, ...orig } = props;

    return (
        <button {...orig} className={`button  button--${role}`} style={{ width, height }}>
            {props.children}
        </button>
    );
};

export default Button;
