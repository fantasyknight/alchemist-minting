import "./index.scss";

// import components
import Content from "./Content";
import Header from "./Header";

const Landing = () => {
  return (
    <div className="landing ps-4 pe-4 ps-md-5 pe-md-5 flex-fill">
      <Header />
      <Content />
    </div>
  );
};

export default Landing;
