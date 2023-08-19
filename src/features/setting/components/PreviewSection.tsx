import { previewSubText, previewTitleText } from '../constants';
import useSetting from '../hooks/useSetting';

const PreviewSection = () => {
  const { handlePreviewClick } = useSetting();
  return (
    <div className="setting-preview-container">
      <div className="setting-preview-title-text">{previewTitleText}</div>
      <div className="setting-preview-sub-text">{previewSubText}</div>
      <button className="setting-preview-btn" onClick={handlePreviewClick}>
        Preview
      </button>
    </div>
  );
};

export default PreviewSection;
