    // <!-- Typed.js Script -->

document.addEventListener("DOMContentLoaded", function () {
  new Typed("#typed-text", {
    strings: [
      "Web Designer.",
      "Full Stack Software Engineer.",
      "Web Developer.",
      "UI/UX Designer.",
      "Digital Creator.",
      "Brand Consultant."
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 2000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
  });
});

// This script sets the current year in the footer dynamically
// It ensures that the year is always up-to-date without needing to manually change it each year
  document.getElementById("year").textContent = new Date().getFullYear();

// Initialize Swiper for the portfolio section
const swiper = new Swiper('.mySwiper', {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    640: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// <!-- JS to Toggle Menu -->
  document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const menuLinks = mobileMenu.querySelectorAll("a");

    // Toggle menu on button click
    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close menu when any link is clicked
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  });

  // js to handle logo fading effect

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll(".platform-icon").forEach((el) => {
      observer.observe(el);
    });
  });
// Intersection Observer for fading in sections on scroll
// This script uses Intersection Observer to fade in sections as they come into view
// It applies a fade-in effect to all sections except those with the "no-fade"
  document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section:not(.no-fade)");

  sections.forEach(section => {
    const children = Array.from(section.children);

    // Hide children initially
    children.forEach(child => {
      child.style.opacity = 0;
      child.style.transform = "translateY(24px)";
      child.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
    });

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.style.opacity = 1;
                child.style.transform = "translateY(0)";
              }, index * 150); // stagger delay in ms
            });
            observer.unobserve(entry.target); // animate once
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
  });
});




