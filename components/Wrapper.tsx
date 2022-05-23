import "./Wrapper.css";

interface WrapperProps {}

const Wrapper: React.FunctionComponent<WrapperProps> = (children: any) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
