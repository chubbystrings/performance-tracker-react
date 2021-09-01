import imgOne from '../components/assets/img/java2.svg';
import imgTwo from '../components/assets/img/csharp2.svg';
import imgThree from '../components/assets/img/android2.svg';
import imgFour from '../components/assets/img/node2.svg';
import imgFive from '../components/assets/img/python3.png';


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