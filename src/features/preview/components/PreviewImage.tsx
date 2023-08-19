import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

const PreviewImage = () => {
  const [curNum, setCurNum] = useState<number>(0);
  const imageList = [
    '/svg/idcard_basic.svg',
    '/svg/idcard_mude.svg',
    '/svg/meeting_add.svg',
    '/svg/meeting_cancel.svg',
    '/svg/meeting_30.svg',
  ];
  console.log(curNum);
  return (
    <>
      <div className="preview-image-container">
        <div className="preview-choose-carousel">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            autoPlay
            infiniteLoop
            onChange={(index, item) => {
              setCurNum(index);
            }}
          >
            {imageList.map((image, idx) => (
              <div key={idx} className="preview-choose-carousel-img">
                <img src={image} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <div className="preview-carousel-bar">
        {imageList.map((_, idx) => {
          return (
            <div
              key={idx}
              className={
                curNum === idx
                  ? 'preview-carousel-circle-black'
                  : 'preview-carousel-circle-gray'
              }
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default PreviewImage;
