const Producto = (props) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          className="card-img-top"
          src={props.prod.image}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{props.prod.title}</h5>
          <p className="card-text">{props.prod.description}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted text-center">
          Price : {props.prod.price}
        </div>
      </div>
    </div>
  );
};
export default Producto;
