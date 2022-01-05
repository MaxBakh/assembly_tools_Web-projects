const ITEMS__TYPES = {
  image: drawImage,
  audio: drawAudio,
  video: drawVideo
}

function drawImage(item) {

  const imgElement = document.createElement('img');
  imgElement.classList = 'gallery-item__image';
  imgElement.src = item.resource;

  return imgElement;
}

function drawAudio(item) {

  const audioElem = document.createElement('audio');
  audioElem.classList = 'gallery-item__audio';
  audioElem.src = item.resource;
  audioElem.controls = true;

  return audioElem;

}

function drawVideo(item) {

  const videoElem = document.createElement('video');
  videoElem.classList = 'gallery-item__video';
  videoElem.src = item.resource;
  videoElem.controls = true;

  return videoElem;
}


///////////////////////////////////////////
export function drawGalleryItem(item) {
  const itemElement = document.createElement('div');
  itemElement.classList = 'gallery-item';

  const resoursesWrapElem = document.createElement('div');
  resoursesWrapElem.classList = 'gallery-item__resource'

  const drawForType = ITEMS__TYPES[item.type];
  resoursesWrapElem.appendChild(drawForType(item))

  const titleElement = document.createElement('span');
  titleElement.classList = 'gallery-item__title';
  titleElement.textContent = item.title;

  itemElement.appendChild(resoursesWrapElem);
  itemElement.appendChild(titleElement);

  return itemElement;
}