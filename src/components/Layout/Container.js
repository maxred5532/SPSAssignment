import React from 'react';
import styles from './Container.module.less';

// this container wraps its children to be responsive
const Container = ({ children }) => {
    return (
        <div className={styles.containerWrapper}>
            {children}
        </div>
    )
}

export default Container
