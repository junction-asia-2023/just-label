import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  const handleDescriptionClick = () => {
    window.location.href = 'https://www.naver.com';
  };

  return (
    <div className="footer-box">
      <div className="description" onClick={handleDescriptionClick}>
        Do you need to modify information?
      </div>
    </div>
  );
};

export default Footer;
