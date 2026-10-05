const sharp = require('sharp');
sharp('public/social-card.svg').png().toFile('public/social-card.png')
  .then(() => console.log('Updated public/social-card.png'))
  .catch(error => { console.error(error); process.exitCode = 1; });
