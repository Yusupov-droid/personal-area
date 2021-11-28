import React from 'react';

import { withAuthGuard } from '../../hoc/withAuthGuard';

import Main from '../../components/UI/main/Main';
import Block from '../../components/UI/block/Block';
import Content from '../../components/UI/content/Content';
import RegisterForm from '../../components/auth-form/RegisterForm';

const SignUp: React.FC = () => {
    return (
        <Main>
            <Content justify="center" alignment="center">
                <Block>
                    <RegisterForm />
                </Block>
            </Content>
        </Main>
    );
};

export default withAuthGuard('/', 'guest', SignUp);
