import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { useState } from 'react';

import idCardBasic from '/svg/idcard_basic.svg';
import idCardMude from '/svg/idcard_mude.svg';
import meetingAdd from '/svg/meeting_add.svg';
import meetingCancel from '/svg/meeting_cancel.svg';
import meeting30 from '/svg/meeting_30.svg';

const PreviewImage = () => {
  const [curNum, setCurNum] = useState<number>(0);
  const imageList = [
    idCardBasic,
    idCardMude,
    meetingAdd,
    meetingCancel,
    meeting30,
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
            onChange={(index) => {
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
