import * as React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

export default function NextCarousel({
  children,
  items,
}) {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      removeArrowOnDeviceType='mobile'
      autoPlay={true}
      autoPlaySpeed={3000}
      centerMode={false}
      className=''
      containerClass=''
      dotListClass=''
      draggable
      focusOnSelect={false}
      infinite
      itemClass=''
      keyBoardControl
      minimumTouchDrag={80}
      partialVisible
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024,
          },
          items,
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0,
          },
          items: 1,
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464,
          },
          items,
        },
      }}
      showDots={true}
      sliderClass=''
      slidesToSlide={1}
      ssr={true}
      swipeable
    >
      {children}
    </Carousel>
  );
}
