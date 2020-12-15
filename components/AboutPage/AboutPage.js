import React from 'react';
import Head from 'next/head';
import styles from './AboutPage.module.scss';

const HomePage = ( props ) => {
  return (
    <>
      <Head>
        <title>{ props.title }</title>
      </Head>
      <div className = { styles.container }>
        <div className = { styles.content }>
          <h1 className = { styles.title }>About</h1>
        </div>
      </div>
    </>
  )
};

export default HomePage
