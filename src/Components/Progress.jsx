import React, { useState, useEffect } from 'react';

function ProgressBar({ percent }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < percent) {
        setProgress(progress + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [percent, progress]);

  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${progress}%`, height: '100px', color: 'red'}}>
        <span className="progress-label">{progress}%</span>
      </div>
    </div>
  );
}

function Progess({value}) {
  return (
    <div className="app">
      <h1>Animated Progress Bar</h1>
      <ProgressBar percent={value} />
    </div>
  );
}

export default Progess;
