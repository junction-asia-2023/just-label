import useHomeContainer from './hooks/useHomeContainer';
import Profile from './components/Profile';
import './home.scss';

const HomeContainer = () => {
  useHomeContainer();

  return (
    <>
      <Profile />
    </>
  );
};

export default HomeContainer;
