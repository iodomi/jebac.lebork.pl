function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    document.querySelector('.snow-container').appendChild(snowflake);
  
    const startDelay = Math.random() * 5; // random start delay
    const startPosition = Math.random() * 100; // random start pos
    snowflake.style.left = startPosition + 'vw';
    snowflake.style.animationDuration = Math.random() * 3 + 2 + 's'; // random animation time
    snowflake.style.animationDelay = -startDelay + 's'; // negative delay
  }
  
  for (let i = 0; i < 400; i++) {
    createSnowflake();
  }
  