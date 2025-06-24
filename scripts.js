
console.log("Welcome to Bead & Blush 💖");

document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = `${e.pageX}px`;
    sparkle.style.top = `${e.pageY}px`;
    document.body.appendChild(sparkle);
  
    setTimeout(() => sparkle.remove(), 1000);
  });

//2nd time generated:
for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle-float');
    sparkle.style.left = `${Math.random() * 100}%`;
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.animationDuration = `${2 + Math.random() * 2}s`;
    document.body.appendChild(sparkle);
  }