import fs from "fs";
import path from "path";

const eventsFile = path.join("./src/data/events.json");
const imagesFolder = path.join("./public/images/events");

// Read current events
let events = [];
if (fs.existsSync(eventsFile)) {
  events = JSON.parse(fs.readFileSync(eventsFile, "utf8"));
}

// Scan images folder
const imageFiles = fs.readdirSync(imagesFolder).filter((file) => file.endsWith(".jpg"));

// Add new events automatically
imageFiles.forEach((file) => {
  const existing = events.find((event) => event.image === `/images/events/${file}`);
  if (!existing) {
    const newEvent = {
      id: events.length + 1,
      title: `Event ${events.length + 1}`,
      date: new Date().toISOString().split("T")[0],
      time: "12:00 PM",
      host: "Automated",
      description: "Automatically added event",
      image: `/images/events/${file}`
    };
    events.push(newEvent);
    console.log(`Added event: ${file}`);
  }
});

// Save updated events.json
fs.writeFileSync(eventsFile, JSON.stringify(events, null, 2));
console.log("events.json updated successfully!");
