import { useContext } from "react";
import { CounterContext } from "../../Context";

interface BoxProps {
  id: string;
  dataId: number;
  children?: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({ id, children, dataId }) => {
  const { setCounter } = useContext(CounterContext);

  return (
    <div id={id} className="box" onClick={() => setCounter(dataId)}>
      {children}
    </div>
  );
};

export default Box;
