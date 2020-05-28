import React from 'react'
import styles from './SideBar.module.css'
import cx from 'classnames'


function SideBar() {
    return (
        <div className={cx(styles.sidebar)}>
            <h3>Sidebar</h3>
        </div>
    )
}

export default SideBar
