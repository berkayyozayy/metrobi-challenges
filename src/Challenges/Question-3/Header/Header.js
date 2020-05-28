import React from 'react'
import styles from './Header.module.css'
import cx from 'classnames'


function Header() {
    return (

        <div className={cx(styles.header)}>
            <h3>Header</h3>
        </div>
    
    )
}

export default Header
