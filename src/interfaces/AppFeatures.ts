export interface SlideItem {
    header: string;
    description: string;
}

export interface FeatureSlide {
  imgSrc: string;
  itemsLeft?: SlideItem[]
  itemsRight?: SlideItem[]
}
