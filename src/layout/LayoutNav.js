import React from 'react';
import {Header} from 'antd/lib/layout/layout';
import Logo from '../logo.svg';
import {Image} from 'antd';
import Container from '../components/Layout/Container';

const LayoutNav = ({ ...rest }) => {
    return (
        <Header {...rest}>
            <Container>
                <Image
                    src={Logo}
                    preview={false}
                />
            </Container>
        </Header>
    )
}

export default LayoutNav
