let currentSlide = 1;
let isPaused = false; // Variable to check if the slideshow is paused

// Function to change the slide
const changeSlide = () => {
  if (!isPaused) {
    document.getElementById(`s${currentSlide}`).checked = true;
    currentSlide++;
    if (currentSlide > 5) {
      currentSlide = 1;
    }
  }
};

// Start the auto-scroll
let slideInterval = setInterval(changeSlide, 5000);

// Function to pause the auto-scroll
const pauseSlide = () => {
  isPaused = true;
};

// Function to resume the auto-scroll
const resumeSlide = () => {
  isPaused = false;
};

// Adding event listeners to pause and resume auto-scroll on hover
document.querySelectorAll('.zoom-container').forEach((container) => {
  container.addEventListener('mouseover', () => {
    pauseSlide();
    container.classList.add('zoomed');
    container.style.overflow = 'visible'; // Change overflow to visible when zoomed
  });
  container.addEventListener('mouseout', () => {
    resumeSlide();
    container.classList.remove('zoomed');
    container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
  });
  container.addEventListener('mousemove', (event) => {
    if (!container.classList.contains('zoomed')) {
      return;
    }
    const boundingRect = container.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    if (
      offsetX < 0 || offsetX > boundingRect.width ||
      offsetY < 0 || offsetY > boundingRect.height
    ) {
      container.classList.remove('zoomed');
      container.style.overflow = 'hidden'; // Change overflow back to hidden when not zoomed
    }
  });
});
