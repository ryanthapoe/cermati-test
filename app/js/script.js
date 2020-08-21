// Notification Event
const notification =  document.querySelector("#notification");
const notificationPanel = document.querySelector("#notification-panel");
const notificationBtn = document.querySelector("#notification-btn");
const body = document.querySelector("#body");

notificationBtn.addEventListener("click", () => {
  if(notification.classList.contains("notification__container__hidden")) { // notifikasi hidden
    notification.classList.remove("notification__container__hidden");
    body.classList.remove("no-notification");
  } else { // notifikasi shown
    notification.classList.add("notification__container__hidden"); 
    body.classList.add("no-notification");
  }
})

const date = new Date;

// Date for footer
const footerYear = document.querySelector("#footer-year");
const year = date.getFullYear();
footerYear.innerHTML = year;

// Newsletter scroll event
const newsletter = document.querySelector("#newsletter")
const windowHeight = window.innerHeight;
if(localStorage.getItem("newsletter_status") === null){
  localStorage.setItem("newsletter_status", "open")
}

window.addEventListener("scroll", () => {
  const savedTime = localStorage.getItem("newsletter_time");
  const newsletterState = localStorage.getItem("newsletter_status");
  const now = Date.now();

  // first time opening newsletter
  if(savedTime === null && newsletterState === "open") {
    if(windowHeight/3 > window.screenY){
      newsletter.classList.remove("newsletter__hidden");
    }
  } else if(now > savedTime && newsletterState === "closed"){
    localStorage.setItem("newsletter_status", "open");
  }
})

const newsletterCloseBtn = document.querySelector("#newsletter-close-btn");

newsletterCloseBtn.addEventListener("click", () => {
  const now = Date.now();
  const nextPop = now + 600000 // adding 10 minute in miliseconds
  localStorage.setItem("newsletter_time", nextPop);
  localStorage.setItem("newsletter_status", "closed");
  newsletter.classList.add("newsletter__hidden");
});
