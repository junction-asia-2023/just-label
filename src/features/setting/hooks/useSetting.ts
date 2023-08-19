import { useForm, SubmitHandler } from 'react-hook-form';

import { Inputs } from '../types';

const useSetting = () => {
  const { register, handleSubmit, control } = useForm<Inputs>({
    defaultValues: {
      mude: 'green',
      comment: '퇴근!',
    },
  });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return {
    register,
    handleSubmit,
    control,
    onSubmit,
  };
};

export default useSetting;
