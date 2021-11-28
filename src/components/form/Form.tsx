import './Form.scss';
import React from 'react';

type Props = React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>;
export const Form: React.FC<Props> = (props) => {
    return (
        <form {...props} className='form'>
            {props.children}
        </form>
    );
};


export const FormGroup: React.FC = (props) => {
    return (
        <div className='form__group'>
            {props.children}
        </div>
    );
};

type FormErrorMessageProps = {
    touched?: boolean;
    message?: string;
}
export const FormErrorMessage: React.FC<FormErrorMessageProps> = (props) => {
    return (
        <div className='form__error'>
            {(props.touched && props.message) && props.message}
        </div>
    );
};