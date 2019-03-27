import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div className='home-container'>
        <h1>Github Battle: Battle your friends...and stuff.</h1>

        <Link className='button' to='/battle'>
          Battle
        </Link>

        <p>A website made by following Tyler McGinnis's React Fundamentals Course</p>
      </div>
    )

  }
}

export default Home;