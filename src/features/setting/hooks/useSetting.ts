import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

import { Inputs } from '../types';
import { URL } from '../../shared/constants/url';

import goodMood from '/png/badge_good.png';
import badMood from '/png/badge_bad.png';

import { dummyEsl, labelsImagePushPath, token } from '../constants';

const useSetting = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      mood: '',
      comment: '',
    },
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const imgEl = document.createElement('img');
    imgEl.src = data.mood === 'mood_GOOD' ? goodMood : badMood; //TODO 이래도 될까

    fetch(imgEl.src)
      .then((res) => {
        console.log('res', res);
        return res.blob();
      })
      .then((blob) => {
        console.log('blob', blob);
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = async () => {
          if (typeof reader.result === 'string') {
            mutation.mutate({ img: reader.result });
          }
        };
      });
  };

  const handlePreviewClick = () => {
    navigate(URL.preview);
  };

  const mutation = useMutation({
    mutationFn: async ({ img }: { img: string }) => {
      console.log('mutate img', img);
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

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
    handlePreviewClick,
  };
};

export default useSetting;
