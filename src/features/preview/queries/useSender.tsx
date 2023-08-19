import { useMutation } from '@tanstack/react-query';
import html2canvas from 'html2canvas';
import axios from 'axios';
import { useRef } from 'react';

import {
  dummyEsl,
  height,
  labelsImagePushPath,
  token,
  width,
} from '../constants';

const useSender = () => {
  const domRef = useRef<HTMLDivElement>(null);

  const mutation = useMutation({
    mutationFn: async ({ img }: { img: string }) => {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      const res = await axios.post(
        labelsImagePushPath,
        {
          labelCode: dummyEsl.labelId,
          page: 1,
          frontPage: 1,
          image: img.split(',')[1],
          articleList: [
            {
              articleId: dummyEsl.productId,
              articleName: dummyEsl.productName,
              nfcUrl: 'http://www.solumesl.com',
              data: {
                ARTICLE_ID: dummyEsl.productId,
                ARTICLE_NAME: dummyEsl.productName,
                NFC_URL: 'http://www.solum.com/p/JC000001',
                SALE_PRICE: '$100',
                DISCOUNT_PRICE: '$90',
              },
            },
          ],
        },
        {
          headers: {
            'Content-Type': `application/json; charset=utf-8 `,
          },
        },
      );
      console.log(res);
    },
  });

  const handleSendEslClick = async () => {
    if (domRef.current) {
      const canvas = await html2canvas(domRef.current, {
        width,
        height,
        scale: 1,
      });
      mutation.mutate({ img: canvas.toDataURL() });
    }
  };
  return { domRef, handleSendEslClick };
};

export default useSender;
