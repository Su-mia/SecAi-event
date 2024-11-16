import React from 'react';
import Vector1 from '../assets/Leaderboard/Vector.svg';
import Vector2 from '../assets/Leaderboard/Vector2.svg';
import Vector3 from '../assets/Leaderboard/Vector3.svg';
import './BlobBackground.css'; 

function BlobBackground() {
  return (
    <div className="blob-background ">
      <img src={Vector1} alt="Blob 1" className="blob blob1" />
      <img src={Vector2} alt="Blob 2" className="blob blob2" />
      <img src={Vector3} alt="Blob 3" className="blob blob3" />
      <img src={Vector2} alt="Blob 4" className="blob blob4" />
    </div>
  );
}

export default BlobBackground;
