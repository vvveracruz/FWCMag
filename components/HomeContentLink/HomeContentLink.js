import React from 'react';
import Link from 'next/Link';
import styles from './HomeContentLink.module.css';

const HomeContentLink = ( props ) => {
  return (
    <div className = { styles.container } >
      <Link href= { props.link }><a>{ props.text }</a></Link>
    </div>
  )
};

export default HomeContentLink
