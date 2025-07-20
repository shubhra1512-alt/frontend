document.addEventListener("DOMContentLoaded", function () {
  console.log("Script loaded");

  // TERMS MODAL
  const termsModal = document.getElementById("termsModal");
  const startBtn = document.querySelector(".start-button");
  const closeTermsBtn = document.querySelector(".close-btn");

  if (startBtn && termsModal && closeTermsBtn) {
    startBtn.addEventListener("click", function (event) {
      event.preventDefault();
      termsModal.style.display = "block";
    });

    closeTermsBtn.addEventListener("click", function () {
      termsModal.style.display = "none";
    });

    window.addEventListener("click", function (e) {
      if (e.target === termsModal) {
        termsModal.style.display = "none";
      }
    });
  }

  // ABOUT US MODAL
  const aboutModal = document.getElementById("aboutModal");
  const aboutBtn = document.getElementById("aboutBtn");
  const aboutClose = aboutModal?.querySelector(".close");

  if (aboutBtn && aboutModal && aboutClose) {
    aboutBtn.addEventListener("click", function () {
      aboutModal.style.display = "block";
    });

    aboutClose.addEventListener("click", function () {
      aboutModal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
      if (event.target === aboutModal) {
        aboutModal.style.display = "none";
      }
    });
  } else {
    console.warn("About modal elements not found");
  }
});

// FUNCTION TO CLOSE T&C MODAL AND SHOW HOMEPAGE
function closePopup() {
  const checkbox = document.getElementById("acceptCheckbox");
  if (!checkbox.checked) {
    alert("Please accept the terms and conditions to proceed.");
    return;
  }

  document.getElementById("termsModal").style.display = "none";

  const mainContent = document.querySelector(".main-content");
  if (mainContent) {
    mainContent.style.display = "none";
  }

  const homepage = document.getElementById("homepage");
  if (homepage) {
    homepage.style.display = "flex";
  }
}
