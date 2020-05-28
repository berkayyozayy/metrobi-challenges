import React from 'react'
import styles from './RelatedPosts.module.css';
import cx from 'classnames'


function RelatedPosts() {
    return (
        <div className={cx(styles.relatedPosts)}>
            <h3>Related Posts</h3>
        </div>
    )
}

export default RelatedPosts
