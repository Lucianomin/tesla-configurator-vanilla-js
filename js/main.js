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
  let selectedIndex = 0; // Keep the same percentage across views

  // Handle percentage selection
  exteriorButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove selection from all buttons
      exteriorButtons.forEach((btn) => btn.classList.remove("btn-selected"));
      button.classList.add("btn-selected");

      // Update selected percentage for all views
      selectedIndex = index;

      // Update image
      exteriorImage.src = viewImages[currentView][selectedIndex];
    });
  });

  // Handle view switching
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove selection from other view buttons
      viewButtons.forEach((btn) => btn.classList.remove("btn-selected"));
      button.classList.add("btn-selected");

      // Change the view
      currentView = button.id;

      // Ensure buttons reflect the last selected percentage
      exteriorButtons.forEach((btn, i) => {
        btn.classList.toggle("btn-selected", i === selectedIndex);
      });

      // Show the last selected percentage for the new view
      exteriorImage.src = viewImages[currentView][selectedIndex];
    });
  });

  // Initialize with the first view and selected percentage
  exteriorImage.src = viewImages[currentView][selectedIndex];
  exteriorButtons[selectedIndex].classList.add("btn-selected");
});
