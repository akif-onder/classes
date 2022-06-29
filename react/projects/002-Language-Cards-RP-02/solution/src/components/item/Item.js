const Item = ({ card }) => {
  const { name, img, options } = card;

  return (
    <div clasName="card">
      <img className="card-logo" src={img} alt="" />
      <h3 className="card-title">{name}</h3>
    </div>
  );
};

export default Item;
