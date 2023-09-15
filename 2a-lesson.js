const Jimp = require('jimp');

Jimp.read("./src/img/bonsai.png", async function (err, image) {
  const width = image.bitmap.width;
  const height = image.bitmap.height;
  for (let iR = 0; iR < height; iR++) { // trecem prin fiecare rand
    for (let iC = 0; iC < width; iC++) { // la fiecare rand trecem prin fiecare coloana
      const thisColor = image.getPixelColor(iC, iR); // iC = coloana(x), iR = randul (y)
      // culoarea vine in format de numar, greu de citit
      // de aceea trebuie transformat in rgb, ca sa fie mai usor de citit
      const rgbaColor = Jimp.intToRGBA(thisColor);
      const totalLuminosity = rgbaColor.r + rgbaColor.g + rgbaColor.b;
      const averageLuminosity = totalLuminosity / 3;
      const newColor = Jimp.rgbaToInt(averageLuminosity, averageLuminosity, averageLuminosity, 255);
      image.setPixelColor(newColor, iC, iR);
    }
  }
  image.write('./src/img/modified/bonsai.png');
});

// const toGreyScale = (image) => {
//   const width = image.bitmap.width;
//   const height = image.bitmap.height;
//   for (let ri = 0; ri < height; ri++) {
//     for (let ci = 0; ci < width; ci++) {
//       const currentColor = image.getPixelColor(ci, ri);
//       const { r, g, b, a } = Jimp.intToRGBA(currentColor);
//       const greyScalePixel = (r + g + b) / 3;
//       const newColor = Jimp.rgbaToInt(greyScalePixel, greyScalePixel, greyScalePixel, a);
//       image.setPixelColor(newColor, ci, ri);
//     }
//   }
//   return image;
// }

// const toBlackAndWhite = (image) => {
//   const width = image.bitmap.width;
//   const height = image.bitmap.height;
//   for (let ri = 0; ri < height; ri++) {
//     for (let ci = 0; ci < width; ci++) {
//       const currentColor = image.getPixelColor(ci, ri);
//       const { r, g, b, a } = Jimp.intToRGBA(currentColor);
//       const bOrW = (r + g + b) / 3 > 127 ? 255 : 0;
//       const newColor = Jimp.rgbaToInt(bOrW, bOrW, bOrW, a);
//       image.setPixelColor(newColor, ci, ri);
//     }
//   }
//   return image;
// }

// const removeRed = (image) => {
//   const width = image.bitmap.width;
//   const height = image.bitmap.height;
//   for (let ri = 0; ri < height; ri++) {
//     for (let ci = 0; ci < width; ci++) {
//       const currentColor = image.getPixelColor(ci, ri);
//       const { r, g, b, a } = Jimp.intToRGBA(currentColor);
//       const newColor = Jimp.rgbaToInt(0, g, b, a);
//       image.setPixelColor(newColor, ci, ri);
//     }
//   }
//   return image;
// }
// const removeGreen = (image) => {
//   const width = image.bitmap.width;
//   const height = image.bitmap.height;
//   for (let ri = 0; ri < height; ri++) {
//     for (let ci = 0; ci < width; ci++) {
//       const currentColor = image.getPixelColor(ci, ri);
//       const { r, g, b, a } = Jimp.intToRGBA(currentColor);
//       const newColor = Jimp.rgbaToInt(r, 0, b, a);
//       image.setPixelColor(newColor, ci, ri);
//     }
//   }
//   return image;
// }
// const removeBlue = (image) => {
//   const width = image.bitmap.width;
//   const height = image.bitmap.height;
//   for (let ri = 0; ri < height; ri++) {
//     for (let ci = 0; ci < width; ci++) {
//       const currentColor = image.getPixelColor(ci, ri);
//       const { r, g, b, a } = Jimp.intToRGBA(currentColor);
//       const newColor = Jimp.rgbaToInt(r, g, 0, a);
//       image.setPixelColor(newColor, ci, ri);
//     }
//   }
//   return image;
// }

// const addText = async (image, text) => {
//   await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK).then((font) => {
//     image.print(font, 10, 10, text);
//   });
// }