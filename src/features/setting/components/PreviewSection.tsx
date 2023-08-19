import { FunctionComponent } from 'react';

import { previewSubText, previewTitleText } from '../constants';

type PreviewSectionProps = {
  handlePreviewClick: () => void;
};

const PreviewSection: FunctionComponent<PreviewSectionProps> = ({
  handlePreviewClick,
}) => {
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
