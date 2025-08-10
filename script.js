const brandData = {
  catalina: {
    title: "Catalina Crunch",
    description: "Catalina Crunch partners with Brunson to fuel athletic performance through low-carb, high-protein snacks that help fuel champions."
  },
  dunkin: {
    title: "Dunkin' Donuts",
    description: "Brunson collaborates with Dunkin' to energize fans and communities with morning coffee, donuts, and community give-back events."
  },
  secondround: {
    title: "Second Round Foundation",
    description: "Jalen's own foundation providing scholarships, mentorship, and resources for underprivileged students and families across the nation."
  },
  oura: {
    title: "Oura Ring",
    description: "Brunson relies on Oura Ring to track sleep and performance, inspiring others to prioritize recovery and wellness."
  },
  okeeffes: {
    title: "O'Keeffe's",
    description: "Helping Brunson stay game-ready, O'Keeffe's products support skin recovery for peak performance and post-game recovery."
  }
};

document.querySelectorAll(".logo").forEach((logo) => {
  logo.addEventListener("click", () => {
    const brand = logo.dataset.brand;
    const data = brandData[brand];

    if (data) {
      document.getElementById("brand-title").textContent = data.title;
      document.getElementById("brand-description").textContent = data.description;
      document.getElementById("brand-details").classList.add("active");

      // Scroll into view
      document.getElementById("brand-details").scrollIntoView({ behavior: "smooth" });
    }
  });
});
