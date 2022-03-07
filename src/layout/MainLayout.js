import React from 'react';
import {Layout} from 'antd';
import LayoutNav from './LayoutNav';
import {Content} from 'antd/es/layout/layout';
import Container from '../components/Layout/Container';
import styles from './MainLayout.module.less';

const MainLayout = ({children}) => {
    return (
        <Layout className={styles.mainLayout}>
            {/* SPSASGMT Nav */}
            <LayoutNav className={styles.layoutNav} />
            {/* Main Content */}
            <Layout>
                <Content className={styles.layoutContent}>
                    <Container>
                        {children}
                    </Container>
                </Content>
            </Layout>
        </Layout>
    )
}

export default MainLayout
