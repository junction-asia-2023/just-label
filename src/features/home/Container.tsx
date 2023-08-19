import useHomeContainer from './hooks/useHomeContainer';
import Profile from './components/Profile';
import './home.scss';
import Active from './components/Active';
import GrayBar from './components/GrayBar';
import Preview from './components/Preview';
import Schedule from './components/Schedule';
import Event from './components/Event';
import Footer from './components/Footer';

const HomeContainer = () => {
  useHomeContainer();

  return (
    <>
      <Profile />
      <GrayBar />
      <Active />
      <Preview />
      <GrayBar />
      <Schedule />
      <Event />
      <GrayBar />
      <Footer />
    </>
  );
};

export default HomeContainer;
