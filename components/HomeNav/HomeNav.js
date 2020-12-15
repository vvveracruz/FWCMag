import React from 'react';
import styles from './HomeNav.module.css';
import Link from 'next/Link';
import HomePage from '../HomePage/HomePage';
import NeonLink from '../NeonLink/NeonLink';
import HomeGet from '../HomeGetLink/HomeGetLink';

const HomeNav = ( props ) => {
  return (
    <div className = { styles.container }>
      <div className = { styles.linkBox }>
        <NeonLink
          link = "/about"
          text = 'About'/>
      </div>
      <div className = { styles.linkBox }>
        <NeonLink
          link = "#"
          text = ""
          // text = "Get the current issue"
          />
      </div>
      <div className = { styles.linkBox }>
        <NeonLink
          link = "/authors"
          text = 'Contributors'/>
      </div>
    </div>
  )
};

export default HomeNav;
