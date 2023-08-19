import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import rightIcon from '/svg/right.svg';
import previewIcon from '/svg/preview.svg';

import { URL } from '../../shared/constants/url';

const Preview: FunctionComponent = () => {
  const navigate = useNavigate();
  const handlePreviewClick = () => navigate(URL.preview);

  return (
    <section className="preview-box" onClick={handlePreviewClick}>
      <div className="icon-box">
        <img className="icon" src={previewIcon} alt="preview icon" />
      </div>
      <div className="content">
        <div className="title">CardMe Preview</div>
      </div>
      <div>
        <img src={rightIcon} alt="next" />
      </div>
    </section>
  );
};

export default Preview;
