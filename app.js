const bars = document.querySelector(".bars");
const mobileView = document.querySelector(".mobile-view");
const close = document.querySelector(".times");
bars.addEventListener("click", () => {
  if (bars.classList.contains("fa-bars")) {
    mobileView.style.display = "block";
    // bars.classList.add("fa-times");
    // bars.classList.remove("fa-bars");
  }
  // else {
  //   mobileView.style.display = "none";
  //   bars.classList.add("fa-bars");
  //   bars.classList.remove("fa-times");
  // }
});
close.addEventListener("click", () => {
  mobileView.style.display = "none";
});
// end of the bars toogle
const pageLoader = document.querySelector(".page-loader");
window.addEventListener("load", () => {
  pageLoader.style.display = "none";
});
// end of the page loader

let testimonial = document.querySelectorAll(".testimonial");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
}, {});

testimonial.forEach((test) => {
  observer.observe(test);
});
// end of the intersection observer

let abt = document.querySelector(".abt"),
  exp = document.querySelector(".exp"),
  ski = document.querySelector(".ski"),
  write = document.querySelector(".write"),
  wrtUp = document.querySelector(".wrt-up"),
  wrtUp1 = document.querySelector(".wrt-up1"),
  wrtUp2 = document.querySelector(".wrt-up2");

abt.addEventListener("click", () => {
  write.textContent = wrtUp.textContent;
});
exp.addEventListener("click", () => {
  write.textContent = wrtUp1.textContent;
});
ski.addEventListener("click", () => {
  write.textContent = wrtUp2.textContent;
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
