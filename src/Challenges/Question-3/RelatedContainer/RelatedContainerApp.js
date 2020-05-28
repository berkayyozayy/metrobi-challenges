import React from 'react'
import styles from './RelatedContainer.module.css';
import cx from 'classnames'
import RelatedImages from './RelatedImages/RelatedImages';
import RelatedPosts from './RelatedPosts/RelatedPosts';

function RelatedContainerApp() {
    return (
        <div className={cx(styles.relatedConteiner)}>
            <RelatedImages />
            <RelatedPosts />
            
        </div>
    )
}

export default RelatedContainerApp
