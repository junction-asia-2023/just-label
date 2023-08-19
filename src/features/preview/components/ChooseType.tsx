import { FunctionComponent } from 'react';

type ChooseTypeType = {
  seletedType: string;
  handleTypeClick: React.MouseEventHandler<HTMLDivElement>;
};

const ChooseType: FunctionComponent<ChooseTypeType> = ({
  seletedType,
  handleTypeClick,
}) => {
  return (
    <div className="preview-choose-type-container">
      <div
        className={
          seletedType === 'A'
            ? 'preview-choose-type-box'
            : 'preview-not-choose-type-box'
        }
        onClick={handleTypeClick}
        data-type="A"
      >
        CardMe Type A
      </div>
      <div
        className={
          seletedType === 'B'
            ? 'preview-choose-type-box'
            : 'preview-not-choose-type-box'
        }
        onClick={handleTypeClick}
        data-type="B"
      >
        CardMe Type B
      </div>
    </div>
  );
};

export default ChooseType;
