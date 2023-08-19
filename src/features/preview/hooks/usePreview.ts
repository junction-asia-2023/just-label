import { useState } from 'react';

const usePreview = () => {
  const [curNum, setCurNum] = useState<number>(0);

  return {
    curNum,
    setCurNum,
  };
};

export default usePreview;
