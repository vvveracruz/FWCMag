import React from 'react';
import styles from './HomeTitle.module.scss';

const HomePage = ( props ) => {
  const upperTitle = props.title.toUpperCase();

  return (
    <div className = { styles.container } >
      <div className = { styles.diagonalBox }>
        <h1 className = { styles.title }>{ upperTitle }</h1>
      </div>
    </div>
  )
};

export default HomePage;
