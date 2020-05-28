import React from 'react'
import styles from './Hero.module.css'
import cx from 'classnames'

function Hero() {
    return (
        <div className={cx(styles.hero)}>
            <h3>Hero</h3>
        </div>
    )
}

export default Hero
