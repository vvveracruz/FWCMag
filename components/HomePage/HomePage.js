import React from 'react';
import Head from 'next/head';
import styles from './HomePage.module.scss';
import HomeNav from '../HomeNav/HomeNav';
import HomeTitle from '../HomeTitle/HomeTitle';

const HomePage = ( props ) => {
  return (
    <>
      <Head>
        <title>{ props.title }</title>
        <link rel="shortcut icon" type="image/jpg" href={ props.faviconFilepath } />
      </Head>
      <div className = { styles.container }>
        <HomeTitle title = { props.title } />
        <HomeNav />
      </div>
    </>
  )
};

export default HomePage
