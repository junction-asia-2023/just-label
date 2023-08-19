import { FunctionComponent } from 'react';
import { FormState } from 'react-hook-form';

import { previewSubText, previewTitleText } from '../constants';
import { Inputs } from '../types';

type PreviewSectionProps = {
  handlePreviewClick: () => void;
  formState: FormState<Inputs>;
};

const PreviewSection: FunctionComponent<PreviewSectionProps> = ({
  handlePreviewClick,
  formState,
}) => {
  return (
    <div className="setting-preview-container">
      <div className="setting-preview-title-text">{previewTitleText}</div>
      <div className="setting-preview-sub-text">{previewSubText}</div>
      <button
        className="setting-preview-btn"
        onClick={handlePreviewClick}
        disabled={!formState.isValid}
      >
        Preview
      </button>
    </div>
  );
};

export default PreviewSection;
