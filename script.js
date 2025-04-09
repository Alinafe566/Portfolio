document.addEventListener('DOMContentLoaded', () => {
    // Add any JavaScript functionality here
    console.log("Welcome to my portfolio!");
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // Form submission handling (for demonstration purposes)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      form.reset();
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
      });
    });
  
    // About Me slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.about-slide');
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
          slide.classList.add('active');
        }
      });
    }
  
    function changeSlide(direction) {
      currentSlide += direction;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1; // Loop to last slide
      } else if (currentSlide >= slides.length) {
        currentSlide = 0; // Loop to first slide
      }
      showSlide(currentSlide);
    }
  
    // Initialize the first slide
    showSlide(currentSlide);
  
    // Form submission handling (for demonstration purposes)
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message!');
      form.reset();
    });
  });

  // Animation for the welcome heading
  document.addEventListener('DOMContentLoaded', () => {
  const welcomeHeading = document.querySelector('.hero h2');
  if (welcomeHeading) {
      welcomeHeading.style.opacity = 0; // Start invisible
      welcomeHeading.style.transform = 'translateY(-20px)'; // Start slightly above

      setTimeout(() => {
          welcomeHeading.style.transition = 'opacity 1.5s ease-in-out, transform 1.5s ease-in-out'; // Add transition
          welcomeHeading.style.opacity = 1; // Fade in
          welcomeHeading.style.transform = 'translateY(0)'; // Move to original position
      }, 100); // Delay to ensure styles are applied
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... (Your other code) ...

  // Typewriter effect with blinking cursor
  const paragraph = document.querySelector('.hero p');
  if (paragraph) {
      const text = "I'm a passionate web developer.";
      let index = 0;
      let cursor = '_'; // Cursor character

      function typeWriter() {
          if (index < text.length) {
              paragraph.textContent = text.substring(0, index + 1) + cursor;
              index++;
              setTimeout(typeWriter, 50);
          } else {
              // Remove cursor after typing is done
              paragraph.textContent = text;
          }
      }

      function blinkCursor() {
          if (paragraph.textContent.endsWith(cursor)) {
              paragraph.textContent = paragraph.textContent.slice(0, -1);
          } else {
              paragraph.textContent += cursor;
          }
          setTimeout(blinkCursor, 500); // Blink every 500ms
      }

      paragraph.textContent = '';
      typeWriter();
      blinkCursor(); // Start blinking cursor
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // ... (Your other code) ...

  // Animate profile picture size using requestAnimationFrame
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
      let start = null;
      const duration = 1000; // 1 second

      function animate(timestamp) {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const scale = 0.8 + (0.2 * Math.min(1, progress / duration)); // Scale from 0.8 to 1

          profilePic.style.transform = `scale(${scale})`;

          if (progress < duration) {
              requestAnimationFrame(animate);
          }
      }

      requestAnimationFrame(animate);
  }
});
  