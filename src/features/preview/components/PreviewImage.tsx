import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import idCardBasic from '/svg/idcard_basic.svg';
import idCardMude from '/svg/idcard_mude.svg';
import meetingAdd from '/svg/meeting_add.svg';
import meetingCancel from '/svg/meeting_cancel.svg';
import meeting30 from '/svg/meeting_30.svg';
import idCardBasicB from '/svg/idcard_basic_B.svg';
import idCardMudeB from '/svg/idcard_mude_B.svg';
import meetingAddB from '/svg/meeting_add_B.svg';
import meetingCancelB from '/svg/meeting_cancel_B.svg';
import meeting30B from '/svg/meeting_30_B.svg';

import { Dispatch, FunctionComponent } from 'react';

type previewImageType = {
  seletedType: string;
  curNum: number;
  setCurNum: Dispatch<number>;
};

const PreviewImage: FunctionComponent<previewImageType> = ({
  seletedType,
  curNum,
  setCurNum,
}) => {
  const imageListA = [
    idCardBasic,
    idCardMude,
    meetingAdd,
    meetingCancel,
    meeting30,
  ];
  const imageListB = [
    idCardBasicB,
    idCardMudeB,
    meetingAddB,
    meetingCancelB,
    meeting30B,
  ];
  const imageList = seletedType === 'A' ? imageListA : imageListB;
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
            selectedItem={curNum}
            onChange={(index, _) => {
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
              onClick={() => {
                setCurNum(idx);
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
};

export default PreviewImage;
