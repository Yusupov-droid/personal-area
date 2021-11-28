import './Content.scss';
import React from 'react';
import classNames from 'classnames';

type Alignment = 'center' | 'start' | 'end';

type Props = {
    justify?: Alignment;
    alignment?: Alignment;
};

const Content: React.FC<Props> = (props) => {
    const generateClassNames = (aligment?: Alignment, justify?: Alignment) => {
        return classNames('content__inner', {
            'content__inner--justify-end': justify === 'end',
            'content__inner--justify-start': justify === 'start',
            'content__inner--justify-center': justify === 'center',

            'content__inner--align-end': aligment === 'end',
            'content__inner--align-start': aligment === 'start',
            'content__inner--align-center': aligment === 'center',
        });
    };

    return (
        <div className="content">
            <div className={generateClassNames(props.alignment, props.justify)}>{props.children}</div>
        </div>
    );
};

export default Content;
