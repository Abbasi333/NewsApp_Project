// navbar
const burger = document.getElementById("burger");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  burger.classList.toggle("toggle");
});
// navbar
// home
// // Scroll Animation for Home Section Elements
// window.addEventListener("scroll", () => {
//   const homeSection = document.querySelector(".home");
//   const title = document.querySelector(".animate-title");
//   const subtitle = document.querySelector(".animate-subtitle");
//   const button = document.querySelector(".animate-button");

//   const sectionPosition = homeSection.getBoundingClientRect().top;
//   const screenPosition = window.innerHeight / 1.3;

//   if (sectionPosition < screenPosition) {
//     title.classList.add("show");
//     subtitle.classList.add("show");
//     button.classList.add("show");
//   }
// });

// home
// news
document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "be5b2f8375f0280c264972be79e7917a"; // Replace with your gnews.io API key
  const newsContainer = document.querySelector(".news-container");

  async function fetchNews() {
    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?token=${apiKey}`
      );
      const data = await response.json();
      displayNews(data.articles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  function displayNews(articles) {
    newsContainer.innerHTML = articles
      .map(
        (article) => `
        <div class="news-card">
          <img src="${article.image}" alt="${article.title}">
          <div class="news-card-content">
            <h3 class="news-card-title">${article.title}</h3>
            <p class="news-card-description">${article.description}</p>
            <a href="${article.url}" target="_blank">Read More</a>
          </div>
        </div>
      `
      )
      .join("");
  }

  fetchNews();
});

// news
// about section
window.addEventListener("scroll", function () {
  const aboutSection = document.querySelector(".about-section");
  const sectionPosition = aboutSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (sectionPosition < screenPosition) {
    aboutSection.classList.add("active");
  }
});

// about section
