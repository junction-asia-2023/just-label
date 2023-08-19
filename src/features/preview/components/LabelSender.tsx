import { height, width } from '../constants';
import useSender from '../queries/useSender';

const LabelSender = ({ children }: { children: React.ReactNode }) => {
  const { domRef, handleSendEslClick } = useSender();

  return (
    <>
      <div ref={domRef} style={{ width, height }}>
        {children}
      </div>
      <button onClick={handleSendEslClick}>Send esl</button>
    </>
  );
};

export default LabelSender;
