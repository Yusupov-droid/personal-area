import './Modal.scss';
import React from 'react';
import ReactModal from 'react-modal';


type Props = ReactModal.Props
const Modal: React.FC<Props> = (props) => {

    return (
        <ReactModal className={'modal'}  isOpen={props.isOpen} onRequestClose={props.onRequestClose}>
            {props.children}
        </ReactModal>
    );
};

export default Modal;