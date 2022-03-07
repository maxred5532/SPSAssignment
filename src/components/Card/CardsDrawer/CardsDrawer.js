import React from 'react';
import {Drawer} from 'antd';
import styles from './CardsDrawer.module.less';

const CardsDrawer = ({ visible, onClose, children }) => {
    return (
        <Drawer className={styles.drawerRoot}
                placement='right'
                onClose={onClose}
                closable={false}
                destroyOnClose={true}
                visible={visible}>
            {children}
        </Drawer>
    )
}

export default CardsDrawer
