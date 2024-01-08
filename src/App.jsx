import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  async function image_request(type) {
    fetch('https://cave-generation-back.onrender.com/image', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(type)
    }).then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'generation.jpg';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
  }
  return (
    <>
      <img src='main_screen.png' ></img>
      <div id="demon_text">
        <p>As you sprint through the dense forest, you can feel the demon's breath on your neck. The sound of its claws scratching against the dirt is getting louder, and you know that it's getting closer. You desperately search for a place to hide, but your options are limited. Suddenly, you spot two dark caves up ahead, one on your left and one on your right.

          You realize that this might be your only chance to escape. Without hesitation, you make a split-second decision: left or right. As you enter the left cave, you feel a rush of cold air hit your face. The entrance is wide, and the darkness inside is impenetrable. You can hear distant echoes bouncing off the walls, making it difficult to tell how big the cave is.

          On the other hand, the right cave seems more welcoming. It's smaller and more narrow, and the entrance is lined with glowing mushrooms that light up the path. However, you can sense a strange energy emanating from within. You're not sure if it's a sign of danger or something else entirely.

          With the demon still hot on your heels, you must make a decision quickly. Will you brave the unknown depths of the left cave or take your chances with the mysterious energy of the right cave? Choose wisely, for your life depends on it.</p>
        <Link to="/generator">
          <p id="left" onClick={() => image_request("big")}>[&lt;- LEFT]</p>
        </Link>
        <Link to="/generator">
          <p id="right" onClick={() => image_request("small")}>[RIGHT -&gt;]</p>
        </Link>
      </div>
    </>
  );
}

export default App;