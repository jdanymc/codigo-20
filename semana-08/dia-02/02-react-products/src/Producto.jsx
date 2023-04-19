function Producto(props) {
  const { key, title, description, image, price } = props;
  return (
    <div className="card col-md-3" key={key}>
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer text-muted text-center">Price : {price}</div>
    </div>
  );
}
export default Producto;
