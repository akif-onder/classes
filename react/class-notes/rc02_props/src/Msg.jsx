const Msg = (props) => {
  // console.log(props);

  //! Destructiring
  const { mesaj } = props;

  return (
    <div>
      <h3>Merhaba {mesaj}</h3>
    </div>
  );
};

export default Msg;
