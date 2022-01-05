import('./style.scss');

import {
  drawGalleryItem
} from './item';
import items from './items';

const galleryRootElem = document.getElementById('gallery');

items.map(item => galleryRootElem.appendChild(drawGalleryItem(item)));