import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import { useAtom } from 'jotai';

import { Inputs } from '../types';
import { previewMoodAtom } from '../../shared/layout/atom';

import goodMood from '/png/badge_good.png';
import badMood from '/png/badge_bad.png';

import { dummyEsl, labelsImagePushPath, token } from '../constants';
import { modalAtom } from '../../shared/modal/atom';
import { userAtom } from '../../login/atom';

const useSetting = () => {
  const [, setModal] = useAtom(modalAtom);
  const [, setPreviewMood] = useAtom(previewMoodAtom);
  const [{ mood, comment }, setUser] = useAtom(userAtom);
  const { register, handleSubmit, control, formState } = useForm<Inputs>({
    defaultValues: {
      mood: mood,
      comment: comment,
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const imgEl = document.createElement('img');
    setUser((prev) => ({
      ...prev,
      mood: data.mood,
      comment: data.comment,
    }));
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
    setPreviewMood((prev) => ({
      value: mood ? mood.slice(5) : prev.value,
      open: true,
    }));
    setModal({ open: true });
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
    formState,
  };
};

export default useSetting;
