import React from 'react'
import styles from './MainContainer.module.css';
import cx from 'classnames';
import Hero from './Hero/Hero'
import SideBar from './SideBar/SideBar.js'
import MainContent from './MainContent/MainContent'
import ExtraContent from './ExtraContent/ExtraContent'


function MainContainer() {
    return (
        <div className={cx(styles.mainContainer)}>
            <div className={styles.mainLeft}>
                <Hero />
                <SideBar />
            </div>
            <div className={cx(styles.mainRight)}>
                <MainContent />
                <ExtraContent />
            </div>
            
        </div>
    )
}

export default MainContainer;
