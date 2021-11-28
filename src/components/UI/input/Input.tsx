import './Input.scss';
import React from 'react';

type Props = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input: React.FC<Props> = (props) => {
    return <input {...props} className="input" />;
};

export default Input;
