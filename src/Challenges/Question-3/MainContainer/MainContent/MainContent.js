import React from 'react'
import styles from './MainContent.module.css'
import cx from 'classnames'


function MainContent() {
    return (
        <div className={cx(styles.mainContent)}>
            <h3>Main Content</h3>
        </div>
    )
}

export default MainContent
