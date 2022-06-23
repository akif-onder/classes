import './Buton.css';

const Buton = ({ btnName }) => {
  return (
    <div className="title">
      <button className="btn-blue">{btnName}</button>
    </div>
  );
};

export default Buton;
