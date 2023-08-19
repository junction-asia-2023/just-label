import { FunctionComponent } from 'react';

const Footer: FunctionComponent = () => {
  const handleDescriptionClick = () => {};

  return (
    <div className="footer-box">
      <div className="description" onClick={handleDescriptionClick}>
        Do you need to modify information?
      </div>
    </div>
  );
};

export default Footer;
