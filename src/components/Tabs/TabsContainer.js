import React from 'react';
import {Tabs} from 'antd';
import styles from './TabsContainer.module.less';

const TabsContainer = ({ tabsData }) => {
    return (
        <Tabs defaultActiveKey={0} className={styles.tabsContainer}>
            {
                tabsData
                    ? tabsData.map((currentTab, idx) =>
                        <Tabs.TabPane tab={currentTab.title} key={idx}>
                            { currentTab.content }
                        </Tabs.TabPane>
                    )
                    : <div>No tabs</div>
            }
        </Tabs>
    )
}

export default TabsContainer
