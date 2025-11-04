import fs from "fs";
import path from "path";

const membersFile = path.join("./src/data/members.json");
const imagesFolder = path.join("./public/images/members");

// Read current members
let members = [];
if (fs.existsSync(membersFile)) {
  members = JSON.parse(fs.readFileSync(membersFile, "utf8"));
}

// Scan images folder
const imageFiles = fs.readdirSync(imagesFolder).filter((file) => file.endsWith(".jpg"));

// Add new members automatically
imageFiles.forEach((file) => {
  const existing = members.find((member) => member.image === `/images/members/${file}`);
  if (!existing) {
    const newMember = {
      id: members.length + 1,
      name: `Member ${members.length + 1}`,
      role: "Community Member",
      image: `/images/members/${file}`,
      contact: `member${members.length + 1}@example.com`
    };
    members.push(newMember);
    console.log(`Added member: ${file}`);
  }
});

// Save updated members.json
fs.writeFileSync(membersFile, JSON.stringify(members, null, 2));
console.log("members.json updated successfully!");
