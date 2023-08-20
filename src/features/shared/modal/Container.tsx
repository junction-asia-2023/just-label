import { useAtom } from 'jotai';
import { useResetAtom } from 'jotai/utils';

import win from '/svg/win.svg';
import next from '/svg/next.svg';
import idCard from '/svg/idcard_basic.svg';

import { previewMoodAtom } from '../layout/atom';

import { Modal, modalAtom } from './atom';
import './modal.scss';

const ModalContainer = () => {
  const [modal] = useAtom(modalAtom);
  const [previewMood] = useAtom(previewMoodAtom);
  const resetModal = useResetAtom(modalAtom);

  console.log(previewMood);
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
  };
  const handleConfirmClick = () => {
    onConfirm?.();
    resetModal();
  };
  console.log(previewMood);
  return (
    <div className="modal-container">
      <div className="content">
        <span className="close-btn" onClick={handleCloseClick}>
          &times;
        </span>
        {previewMood.open || modal.open ? (
          <>
            <div className="modal-preview-title">Preview</div>
            <div className="modal-preview-box">
              <img src={idCard} alt="preview" />
              <div className="modal-sticker-picked">
                <img src={`/png/mood_${previewMood.value}.png`} alt="preview" />
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
