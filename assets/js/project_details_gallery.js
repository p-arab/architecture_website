document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.slides img');
  const thumbnails = document.querySelectorAll('.thumbnail-container img');
  const thumbnailContainer = document.querySelector('.thumbnail-container');
  const playPauseBtn = document.querySelector('.play-pause-btn');
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach((slide) => slide.style.display = 'none');
    slides[index].style.display = 'block';
  }

  function updateThumbnail(index) {
    thumbnails.forEach((thumbnail) => thumbnail.classList.remove('active'));
    thumbnails[index].classList.add('active');
  }

  function playSlideshow() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
      updateThumbnail(currentIndex);
      updateThumbnailScroll();
    }, 2000);
    playPauseBtn.textContent = 'Pause';
  }

  function pauseSlideshow() {
    clearInterval(intervalId);
    playPauseBtn.textContent = 'Play';
  }

  function updateThumbnailScroll() {
    // FOR VERTICAL SLIDE SHOW //
    const activeThumbnail = document.querySelector('.thumbnail-container .active');
    if (activeThumbnail) {
      const scrollTop = activeThumbnail.offsetTop - (thumbnailContainer.offsetHeight - activeThumbnail.offsetHeight) / 2;
      thumbnailContainer.scrollTop = scrollTop;
    }

    // FOR HORIZANTA SLIDE SHOW //
    // const activeThumbnail = document.querySelector('.thumbnail-container .active');
    // if (activeThumbnail) {
    //   const scrollLeft = activeThumbnail.offsetLeft - (thumbnailContainer.offsetWidth - activeThumbnail.offsetWidth) / 2;
    //   thumbnailContainer.scrollLeft = scrollLeft;
    // }
  }

  playPauseBtn.addEventListener('click', function () {
    if (playPauseBtn.textContent === 'Play') {
      playSlideshow();
    } else {
      pauseSlideshow();
    }
  });

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
      currentIndex = index;
      showSlide(currentIndex);
      updateThumbnail(currentIndex);
      updateThumbnailScroll();
    });
  });

  window.addEventListener('resize', updateThumbnailScroll);

  showSlide(currentIndex);
  updateThumbnail(currentIndex);
  updateThumbnailScroll();
});