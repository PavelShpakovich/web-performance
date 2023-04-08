const sharp = require('sharp');
const path = require('path');
const compress_images = require('compress-images');

const images = [
  'image1.jpeg',
  'image2.jpeg',
  'image3.jpeg',
  'image4.jpeg',
  'image5.jpeg',
  'image6.jpeg',
  'image7.jpeg',
  'image8.jpeg',
  'image9.jpeg',
  'image10.jpeg',
];

const sizes = [320, 768, 1024, 1920];

images.forEach((image) => {
  const input = path.join(__dirname, `images/${image}`);

  sizes.forEach((size) => {
    const outputWebp = path.join(__dirname, `images/webp/${image.split('.')[0]}-${size}.webp`);
    const outputJPEG = path.join(__dirname, `images/jpeg/${image.split('.')[0]}-${size}.jpeg`);

    sharp(input)
      .resize(size)
      .toFormat('webp')
      .toFile(outputWebp, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
        }
      });

    sharp(input)
      .resize(size)
      .toFile(outputJPEG, (err, info) => {
        if (err) {
          console.log(err);
        } else {
          console.log(info);
          const outputCompressed = path.join(__dirname, `images/jpeg/`);

          compress_images(
            outputJPEG,
            outputCompressed,
            { compress_force: false, statistic: true, autoupdate: true },
            false,
            {
              jpg: { engine: 'mozjpeg', command: ['-quality', '80'] },
            },
            { png: { engine: false, command: false } },
            { svg: { engine: false, command: false } },
            { gif: { engine: false, command: false } },
            (error, completed) => {
              console.log(error);
              console.log(completed);
            }
          );
        }
      });
  });
});
