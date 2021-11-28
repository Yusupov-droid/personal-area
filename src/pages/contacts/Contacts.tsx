import React from 'react';
import { withAuthGuard } from '../../hoc/withAuthGuard';

import Main from '../../components/UI/main/Main';
import Block from '../../components/UI/block/Block';
import Profile from '../../components/profile/Profile';
import Content from '../../components/UI/content/Content';
import ContactList from '../../components/contact-list/ContactList';

const Contacts: React.FC = () => {
    return (
        <Main>
            <Content>
                <Block>
                    <Profile />
                </Block>
                <Block>
                    <ContactList />
                </Block>
            </Content>
        </Main>
    );
};

export default withAuthGuard('/sign-in', 'private', Contacts);
