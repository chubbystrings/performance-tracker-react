import imgOne from '../assets/img/java2.svg';
import imgTwo from '../assets/img/csharp2.svg';
import imgThree from '../assets/img/android2.svg';
import imgFour from '../assets/img/node2.svg';
import imgFive from '../assets/img/python3.png';


const images: Record<string, any> = {
  imgOne,
  imgTwo,
  imgThree,
  imgFour,
  imgFive,
};

function getImageByKey(key: string) {
  return images[key];
}

export default getImageByKey;