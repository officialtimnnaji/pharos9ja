import fs from "fs";
import path from "path";

// Path to slides.json
const slidesFile = path.join("./src/data/slides.json");

// Path to images folder
const imagesFolder = path.join("./public/images");

// Read current slides
let slides = [];
if (fs.existsSync(slidesFile)) {
  slides = JSON.parse(fs.readFileSync(slidesFile, "utf8"));
}

// Read all .jpg files
const imageFiles = fs.readdirSync(imagesFolder).filter((file) => file.endsWith(".jpg"));

// Add new slides
imageFiles.forEach((file) => {
  const existing = slides.find((slide) => slide.img === `/images/${file}`);
  if (!existing) {
    const newSlide = {
      id: slides.length + 1,
      title: `Community Event ${slides.length + 1}`,
      description: "Automatically added event",
      img: `/images/${file}`,
    };
    slides.push(newSlide);
    console.log(`Added slide: ${file}`);
  }
});

// Write JSON
fs.writeFileSync(slidesFile, JSON.stringify(slides, null, 2));
console.log("slides.json updated successfully!");
