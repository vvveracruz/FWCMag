import React from 'react';
import styles from './HomeNav.module.css';
import Link from 'next/Link';
import HomePage from '../HomePage/HomePage';
import HomeContentLink from '../HomeContentLink/HomeContentLink';
import HomeGet from '../HomeGet/HomeGet';

const HomeNav = ( props ) => {
  return (
    <div className = { styles.container }>
      <div className = { styles.linkBox }>
        <HomeContentLink
          link = "vibe"
          text = 'About'/>
      </div>
      <div className = { styles.linkBox }>
        <HomeGet
          link = "#"
          text = "Get the current issue"/>
      </div>
      <div className = { styles.linkBox }>
        <HomeContentLink
          link = "/authors"
          text = 'Contributors'/>
      </div>
    </div>
  )
};

export default HomeNav;
