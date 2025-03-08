document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuButton = document.getElementById("mobileMenuButton");
    const mobileMenu = document.getElementById("mobileMenu");
  
    mobileMenuButton.addEventListener("click", function () {
      const isHidden = mobileMenu.classList.contains("-translate-y-full");
  
      if (isHidden) {
        mobileMenu.classList.remove("-translate-y-full", "opacity-0");
        mobileMenu.classList.add("translate-y-0", "opacity-100");
      } else {
        mobileMenu.classList.add("-translate-y-full", "opacity-0");
        mobileMenu.classList.remove("translate-y-0", "opacity-100");
      }
    });
  
    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
      if (
        !mobileMenu.contains(event.target) &&
        !mobileMenuButton.contains(event.target)
      ) {
        mobileMenu.classList.add("-translate-y-full", "opacity-0");
        mobileMenu.classList.remove("translate-y-0", "opacity-100");
      }
    });
  });
  
      // Add fade-in animation to nav links
      const navLinks = document.querySelectorAll(".nav-link");
      navLinks.forEach((link, index) => {
        link.classList.add("animate-fade-in");
        link.style.animationDelay = `${index * 0.1}s`;
      });