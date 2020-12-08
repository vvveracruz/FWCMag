import React from 'react';
import styles from './HomeTitle.module.css';

const HomePage = ( props ) => {
  return (
    <div className = { styles.container } >
      <h1>{ props.title }</h1>
    </div>
  )
};

export default HomePage
