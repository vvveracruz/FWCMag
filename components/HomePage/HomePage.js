import React from 'react';
import Head from 'next/head';
import styles from './HomePage.module.css';
import HomeNav from '../HomeNav/HomeNav';
import HomeTitle from '../HomeTitle/HomeTitle';

const HomePage = ( props ) => {
  return (
    <div className = { styles.container }>
      <Head>
        <title>{ props.title }</title>
        <link rel="shortcut icon" type="image/jpg" href={ props.faviconFilepath } />
      </Head>
      <HomeTitle title = { props.title } />
      <HomeNav />
    </div>
  )
};

export default HomePage
