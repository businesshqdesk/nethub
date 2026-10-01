document.addEventListener("DOMContentLoaded", function () {

  // Current year
  const year = document.getElementById("year");

  if (year) {
    year.textContent = new Date().getFullYear();
  }


  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

      const targetId = this.getAttribute("href");

      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);

      if (target) {
        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }

    });

  });


  // WhatsApp links
  const whatsappNumber = "917045326703";

  const whatsappMessage =
    "Hello NetHub, I need help with your services.";

  document.querySelectorAll(".whatsapp-link").forEach(function (button) {

    button.addEventListener("click", function () {

      const url =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);

      window.open(url, "_blank");

    });

  });


  // Small scroll effect for navigation
  const navigation = document.querySelector(".nav");

  window.addEventListener("scroll", function () {

    if (!navigation) {
      return;
    }

    if (window.scrollY > 20) {
      navigation.classList.add("scrolled");
    } else {
      navigation.classList.remove("scrolled");
    }

  });

});
