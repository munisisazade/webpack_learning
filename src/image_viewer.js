import download from '../assets/download.jpg';
import small from '../assets/small.jpg';
import '../styles/image_viewer.css';

const image = document.createElement('img');
image.src = small;
document.body.appendChild(image);

const bigimage = document.createElement('img');
bigimage.src = download;
document.body.appendChild(bigimage);
