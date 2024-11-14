const fs = require('fs');
const path = require('path');

function getRandomDate() {
  const start = new Date();
  const end = new Date(2025, 0, 31);
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString();
}

const roles = ['design', 'set', 'admin', 'buyer'];
const locations = ['london', 'manchester', 'birmingham', 'liverpool'];
const cvLink = "https://firebasestorage.googleapis.com/v0/b/ez-daily-90474.firebasestorage.app/o/CV's%2FJane_Doe_Costume_Designer_CV.pdf?alt=media&token=1c8cf8b2-8eb6-4014-b74d-c2291c84a229";
const imdbBaseLink = "https://www.imdb.com/name/";

const names = [
  "Luke Skywalker", "Leia Organa", "Han Solo", "Obi-Wan Kenobi", "Anakin Skywalker", "Padmé Amidala", "Yoda", "Mace Windu",
  "Qui-Gon Jinn", "Ahsoka Tano", "Jabba the Hutt", "Darth Vader", "Darth Sidious", "Count Dooku", "Jango Fett", "Boba Fett",
  "Lando Calrissian", "Chewbacca", "Rey Skywalker", "Finn", "Poe Dameron", "Kylo Ren", "General Hux", "Maz Kanata", "BB-8",
  "R2-D2", "C-3PO", "Rose Tico", "Admiral Ackbar", "Mon Mothma", "Saw Gerrera", "Cassian Andor", "Jyn Erso", "K-2SO",
  "Chirrut Îmwe", "Baze Malbus", "Orson Krennic", "Greedo", "Wedge Antilles", "Biggs Darklighter", "Bossk", "Zuckuss",
  "IG-88", "Dengar", "Shaak Ti", "Kit Fisto", "Plo Koon", "Ki-Adi-Mundi", "Aayla Secura", "Bail Organa"
];

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

const dailies = Array.from({ length: 50 }, () => ({
  name: getRandomElement(names),
  roles: [getRandomElement(roles)],
  location: [getRandomElement(locations)],
  availability: [
    {
      startDate: getRandomDate(),
      endDate: getRandomDate(),
    }
  ],
  cv: cvLink,
  imdbLink: `${imdbBaseLink}nm${Math.floor(1000000 + Math.random() * 9000000)}`
}));

fs.writeFileSync(path.join(__dirname, 'starWarsDailiesWithLocations.json'), JSON.stringify(dailies, null, 2));

console.log('Generated starWarsDailiesWithLocations.json with 50 entries.');
