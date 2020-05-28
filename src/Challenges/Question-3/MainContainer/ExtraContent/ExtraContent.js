import React from 'react'
import styles from './ExtraContent.module.css'
import cx from 'classnames'



function ExtraContent() {
    return (
        <div className={cx(styles.extraContent)}>
            <h3>Extra Content</h3>
        </div>
    )
}

export default ExtraContent
