import useHomeContainer from './hooks/useHomeContainer';
import Profile from './components/Profile';
import './home.scss';
import Active from './components/Active';
import GrayBar from './components/GrayBar';

const HomeContainer = () => {
  useHomeContainer();

  return (
    <>
      <Profile />
      <GrayBar />
      <Active />
    </>
  );
};

export default HomeContainer;
