/* yarn add clsx --> para agregar clases com comas*/
import style from "./Card.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const Card = ({ job }) => {
  return (
    <div className={style.card}>
      <div className={style.photo}>
        <picture className={style.picture}>
          <div>
            <img src={job.company.logo} alt="Jobs Image" className={style.image} />
          </div>
        </picture>
      </div>
      <div className={style.detail}>
        <h2 className={style.title}>{job.title}</h2>
        <ul className={style.extra}>
          <li className={clsx(style.extra_item, style.company)}>{job.company.name}</li>
          <li className={clsx(style.extra_item, style.time)}>{job.type}</li>
          <li className={clsx(style.extra_item, style.employees)}>
            50-100 employees
          </li>
          <li className={clsx(style.extra_item, style.salary)}>{job.salary}</li>
        </ul>
        <div className={style.country}>
          <button className={style.button}>
            <img src={job.location.logo} alt="Country" className={style.icon} />{" "}
            {job.location.city}
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Card;
