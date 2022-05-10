const bars = document.querySelector(".bars");
const mobileView = document.querySelector(".mobile-view");
bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    mobileView.style.display = "block";
    bars.classList.add("fa-times");
    bars.classList.remove("fa-bars");
  } else {
    mobileView.style.display = "none";
    bars.classList.add("fa-bars");
    bars.classList.remove("fa-times");
  }
});

let testimonial = document.querySelectorAll(".testimonial");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {});

testimonial.forEach((test) => {
  observer.observe(test);
});

// let testimonial = document.querySelectorAll(".testimonial");
// const observer = new IntersectionObserver(
//   (entries) => {
//     entries.forEach((e) => {
//       e.target.classList.toggle("show", e.isIntersecting);
//       if (e.isIntersecting) {
//         observer.unobserve(e.target);
//       }
//     });
//   },
//   {
//     threshold: 1,
//   }
// );
// service.forEach((service) => {
//   observer.unobserve(service);
// });
