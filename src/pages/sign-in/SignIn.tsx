import React from 'react';

import { withAuthGuard } from '../../hoc/withAuthGuard';

import Main from '../../components/UI/main/Main';
import Block from '../../components/UI/block/Block';
import Content from '../../components/UI/content/Content';
import LoginForm from '../../components/auth-form/LoginForm';

const SignIn: React.FC = () => {
    return (
        <Main>
            <Content justify="center" alignment="center">
                <Block>
                    <LoginForm />
                </Block>
            </Content>
        </Main>
    );
};

export default withAuthGuard('/', 'guest', SignIn);
