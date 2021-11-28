import './ContactItem.scss';
import React from 'react';
import { IContactDTO } from '../../api/contacts/contact.service';

import Button from '../UI/button/Button';

type Props = {
    contact: IContactDTO;
    deleteAction: ((contact: IContactDTO) => void);
    updateAction: ((contact: IContactDTO) => void);
};

const ContactItem: React.FC<Props> = (props) => {
    return (
        <div className='contact-item'>
            <div className='contact-item__inner'>
                <img
                    className='contact-item__avatar'
                    src={`https://avatars.dicebear.com/api/avataaars/${props.contact.name}.svg`}
                />
                <div className='contact-item__info'>
                    <span className='contact-item__name'>{props.contact.name}</span>
                    <span className='contact-item__phone'>{props.contact.phone}</span>
                </div>
                <div className='contact-item__toolbox'>
                    <Button
                        width='30px'
                        height='30px'
                        role={'primary'}
                        onClick={() => props.updateAction(props.contact)}
                    >
                        <svg viewBox='0 0 512 512' width='15' height='15'>
                            <path
                                fill='currentColor'
                                d='M497.94 74.17l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91 0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.75 18.75-49.15 0-67.91zm-246.8-20.53c-15.62-15.62-40.94-15.62-56.56 0L75.8 172.43c-6.25 6.25-6.25 16.38 0 22.62l22.63 22.63c6.25 6.25 16.38 6.25 22.63 0l101.82-101.82 22.63 22.62L93.95 290.03A327.038 327.038 0 0 0 .17 485.11l-.03.23c-1.7 15.28 11.21 28.2 26.49 26.51a327.02 327.02 0 0 0 195.34-93.8l196.79-196.79-82.77-82.77-84.85-84.85z'
                            />
                        </svg>
                    </Button>
                    <Button
                        width='30px'
                        height='30px'
                        role={'danger'}
                        onClick={() => props.deleteAction(props.contact)}
                    >
                        <svg viewBox='0 0 448 512' width='15' height='15'>
                            <path
                                fill='currentColor'
                                d='M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z'
                            />
                        </svg>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ContactItem;


