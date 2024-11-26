import "./Container.css";

const Container = ({ title,children }) => {
  return (
    <div className="container" >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Container;
