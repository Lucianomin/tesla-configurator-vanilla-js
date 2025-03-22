document.addEventListener("DOMContentLoaded", function () {
  const checkboxes = document.querySelectorAll(".accessory-form-checkbox");
  const overlay = document.getElementById("overlay");

  function toggleOverlay() {
    const isChecked = Array.from(checkboxes).some((checkbox) => checkbox.checked);
    overlay.classList.toggle("hidden", isChecked);
  }

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", toggleOverlay);
  });

  // Initial check
  toggleOverlay();
});

document.addEventListener("DOMContentLoaded", function () {
  const exteriorButtons = document.querySelectorAll("#exterior-buttons button");
  const exteriorImage = document.getElementById("exterior-image");
  const viewButtons = document.querySelectorAll("#interior-buttons button");

  const viewImages = {
    "front-view-button": [
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_05percent.jpg",
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_20percent.jpg",      
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_35percent.jpg",
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_50percent.jpg",
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_80percent.jpg",
"./images/front_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Front_1_sc1.jpg"
    ],
    "side-view-button": [
"./images/side_car/Toyota_Prius_Prime_2019_Side_05percent_rear.jpg",
"./images/side_car/Toyota_Prius_Prime_2019_Side_20percent_rear.jpg",
"./images/side_car/Toyota_Prius_Prime_2019_Side_35percent_rear.jpg",
"./images/side_car/Toyota_Prius_Prime_2019_Plus_Hatchback_Side_1_50percent.jpg",
"./images/side_car/Toyota_Prius_Prime_2019_Side_80percent_rear.jpg",
"./images/side_car/Toyota_Prius_Prime_2019_Plus_Hatchback_Side_1_sc1.jpg"

    ],
    "back-view-button": [
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_05percent.jpg",
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_20percent.jpg",
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_35percent.jpg",
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_50percent.jpg",
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_80percent.jpg",
"./images/back_car/Toyota_Prius_Prime_2019_Plus_Hatchback_45_Rear_1_sc1.jpg"
    ]
  };

  let currentView = "side-view-button";

  exteriorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
exteriorButtons.forEach((btn) => btn.classList.remove("btn-selected"));
button.classList.add("btn-selected");
exteriorImage.src = viewImages[currentView][index];
    });
  });

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
viewButtons.forEach((btn) => btn.classList.remove("btn-selected"));
button.classList.add("btn-selected");
currentView = button.id;
exteriorImage.src = viewImages[currentView][0];
    });
  });

  // Initialize with the first view
  exteriorImage.src = viewImages[currentView][3];
});