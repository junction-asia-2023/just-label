import { MouseEventHandler, useState } from 'react';

const ChooseType = () => {
  const [seletedType, setSeletedType] = useState<string>('A');
  const handleTypeClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    setSeletedType(target.dataset.type as string);
  };
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
