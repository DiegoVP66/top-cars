import "./styles.css";

const Button = ({ text }) => {
  return (
    <button className="btn-catalog">
      <h1>{text}</h1>
    </button>
  );
};

export default Button;
