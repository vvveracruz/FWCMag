import React from 'react';
import styles from './HomeTitle.module.css';

const slicer = ( string ) => {

  var lst = string.split(' ');
  var l = lst.length;
  var n = Math.round( l /2 );

  var topLineLst = []

  var i = 0;
  for ( i = 0; i < n; i++ ){
    var removed = lst.splice( 0, 1)
    topLineLst.push( removed )
  }

  var bottomLineLst = []
  for ( i = n; i < l; i++ ) {
    var removed = lst.splice( 0, 1)
    bottomLineLst.push( removed )
  }

  var s = [topLineLst.join(' '), bottomLineLst.join(' ')]
  return s;
};

const HomePage = ( props ) => {
  const title = slicer( props.title );
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
