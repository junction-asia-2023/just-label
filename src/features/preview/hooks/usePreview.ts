import { MouseEventHandler, useState } from 'react';

const usePreview = () => {
  const [seletedType, setSeletedType] = useState<string>('A');
  const [curNum, setCurNum] = useState<number>(0);

  const handleTypeClick: MouseEventHandler<HTMLDivElement> = (e) => {
    const target = e.target as HTMLDivElement;
    setSeletedType(target.dataset.type as string);
  };
  return {
    seletedType,
    curNum,
    setCurNum,
    handleTypeClick,
  };
};

export default usePreview;
