import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Inputs } from '../types';
import { URL } from '../../shared/constants/url';

const useSetting = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      mude: 'green',
      comment: '퇴근!',
    },
  });
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const handlePreviewClick = () => {
    navigate(URL.preview);
  };

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
    handlePreviewClick,
  };
};

export default useSetting;
