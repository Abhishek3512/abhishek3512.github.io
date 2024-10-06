document.addEventListener("DOMContentLoaded", function() {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          document.querySelector(this.getAttribute('href')).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });

  // Back to top button
  let topButton = document.createElement('button');
  topButton.textContent = '⬆️';
  topButton.classList.add('back-to-top');
  document.body.appendChild(topButton);

  window.onscroll = function () {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
          topButton.style.display = "block";
      } else {
          topButton.style.display = "none";
      }
  };

  topButton.onclick = function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  };
  
  // Filter Projects Function (if you use categories for filtering)
  function filterProjects(category) {
      let projects = document.querySelectorAll('.project');
      projects.forEach((project) => {
          if (project.classList.contains(category) || category === 'all') {
              project.style.display = 'block';
          } else {
              project.style.display = 'none';
          }
      });
  }
});
