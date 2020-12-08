import React from 'react';
import Link from 'next/Link';
import styles from './NeonLink.module.scss';

const NeonLink = ( props ) => {
  return (
    <div className = { styles.container } >
      <Link href={ props.link }><a className={ styles.neon }>{ props.text }</a></Link>
    </div>
  )
};

export default NeonLink;
