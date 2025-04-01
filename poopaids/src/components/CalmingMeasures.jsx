import React, { useState } from 'react';
import './CalmingMeasures.css';

const CalmingMeasures = () => {
  const [timer, setTimer] = useState(null);  // Timer state
  const [isTimerRunning, setIsTimerRunning] = useState(false);  // Timer running state

  // Start timer
  const startTimer = () => {
    if (isTimerRunning) return;
    setIsTimerRunning(true);
    const countdown = 10;  // 10 seconds for simplicity in this example
    let timeRemaining = countdown;
    setTimer(timeRemaining);
    const interval = setInterval(() => {
      timeRemaining--;
      setTimer(timeRemaining);
      if (timeRemaining <= 0) {
        clearInterval(interval);
        setIsTimerRunning(false);
      }
    }, 1000);
  };

  // Stop timer
  const stopTimer = () => {
    setIsTimerRunning(false);
    setTimer(null);
  };

  return (
    <div id="calmingmeasures">
      <h2>Suggested Calming Measures</h2>

      {/* Deep Breathing Section */}
      <section id="deepbreathing">
        <h3 id="cmh3">Deep Breathing Exercises</h3>
        <p>Focus on your breath. Breathe in for 4 seconds, hold for 4 seconds, then breathe out for 4 seconds.</p>
        <div>
          {isTimerRunning ? (
            <div>
              <p>Time Remaining: {timer}s</p>
              <button onClick={stopTimer}>Stop Timer</button>
            </div>
          ) : (
            <div>
              <button onClick={startTimer}>Start Timer</button>
            </div>
          )}
        </div>
      </section>

      {/* Gentle Stretching Section */}
      <section id="gentlestretching">
        <h3 id = "cmh3">Gentle Stretching</h3>
        <p>Here’s a video to guide you through some gentle stretching exercises:</p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/yqeirBfn2j4?si=calTom_PvQakmKeQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </section>

      {/* Listening to Calming Music */}
      <section id="calming-music">
        <h3 id = "cmh3">Listening to Calming Music</h3>
        <p>Relax and listen to the calming sounds of nature. Click the link below:</p>
        <a href="https://www.rainymood.com/" target="_blank" rel="noopener noreferrer">
          Calming Rain Sounds
        </a>
      </section>

      {/* Guided Meditation Section */}
      <section id="guided-meditation">
        <h3>Guided Meditation</h3>
        <p>Take a deep breath and let go of any tension. Close your eyes and visualize a peaceful place. Breathe in deeply, feel the calm, and breathe out any stress or negativity.</p>
        <p>Remember, you are in control of your mind and body. Let go of the thoughts that weigh you down, and allow yourself to relax fully in this moment.</p>
      </section>
    </div>
  );
};

export default CalmingMeasures;
