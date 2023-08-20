import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import win from '/svg/win.svg';
import next from '/svg/next.svg';
import idCard from '/svg/idcard_basic.svg';
import moodBad from '/png/mood_BAD.png';
import moodGood from '/png/mood_GOOD.png';

import { previewMoodAtom } from '../layout/atom';

import { Modal, modalAtom } from './atom';
import './modal.scss';

const ModalContainer = () => {
  const [modal] = useAtom(modalAtom);
  const [previewMood, setPreviewMood] = useAtom(previewMoodAtom);
  const resetModal = useResetAtom(modalAtom);

  if (!modal.open) return null;
  const { imageType, onClose, title, description, footer, onConfirm } =
    modal as Modal;

  const imageSrc = (() => {
    switch (imageType) {
      case 'win':
        return win;
      case 'next':
        return next;
      default:
        return undefined;
    }
  })();
  const handleCloseClick = () => {
    onClose?.();
    resetModal();
    setPreviewMood({ open: false });
  };
  const handleConfirmClick = () => {
    onConfirm?.();
    resetModal();
  };
  return (
    <div className="modal-container">
      <div className="content">
        <span className="close-btn" onClick={handleCloseClick}>
          &times;
        </span>
        {previewMood.open && modal.open ? (
          <>
            <div className="modal-preview-title">Preview</div>
            <div className="modal-preview-box">
              <img src={idCard} alt="preview" />
              <div className="modal-sticker-picked">
                {previewMood.value === 'GOOD' && (
                  <img src={moodGood} alt="preview" />
                )}
                {previewMood.value === 'BAD' && (
                  <img src={moodBad} alt="preview" />
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <img src={imageSrc} alt="win" />
            <div>
              <div className="title">{title}</div>
              <div className="description">{description}</div>
            </div>
            <div className="footer">
              {onConfirm && (
                <button className="button" onClick={handleConfirmClick}>
                  Download
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ModalContainer;
