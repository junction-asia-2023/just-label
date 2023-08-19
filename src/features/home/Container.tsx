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
    <div className="home-container">
      <Profile />
      <GrayBar />
      <Active />
      <Preview />
      <GrayBar />
      <Schedule />
      <Event />
      <Footer />
    </div>
  );
};

export default HomeContainer;
