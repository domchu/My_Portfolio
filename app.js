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
