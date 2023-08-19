import useSetting from '../../hooks/useSetting';

import DailySticker from './DailySticker';
import DailyWord from './DailyWord';

const SubmitForm = () => {
  const { handleSubmit, onSubmit } = useSetting();
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DailyWord />
        <DailySticker />
        {/* <div>
          <input type="submit" />
        </div> */}
      </form>
    </>
  );
};

export default SubmitForm;
