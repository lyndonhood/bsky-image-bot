import { postImage } from './clients/at';
import { getNextImage } from './images';
import * as dotenv from 'dotenv';
dotenv.config();

// EDIT THIS!
function postTextFromImageName(imageName: string): string {

  // Just skip all that and return chosen text
  return '';
}

// EDIT THIS!
function altTextFromImageName(imageName: string): string {
  // return 'Image from ' + postTextFromImageName(imageName);
  return 'Daniel Craig introducting The Weekend on SNL, with the text: E rangatira mā... Te mutunga wiki';
}

// Shouldn't have to edit this.
async function main() {
  const { LAST_IMAGE_NAME: lastImageName } = process.env;
  const nextImage = await getNextImage({ lastImageName });

  console.log(nextImage.imageName);

  await postImage({
    path: nextImage.absolutePath,
    text: postTextFromImageName(nextImage.imageName),
    altText: altTextFromImageName(nextImage.imageName),
  });
}

main();
