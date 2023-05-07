import style from "./Search.module.scss";
import PropTypes from "prop-types";

const Search = ({ setFilteredJobs, jobs }) => {

  const handleInputChange = (e) => {
    const { value } = e.currentTarget;
    const filteredJobs = jobs.filter((job) => 
    job.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredJobs(filteredJobs)
    console.log(filteredJobs);
  };
  return (
    <div className={style.search}>
      <picture className={style.picture}>
        <img src="/search.png" alt="Search" className={style.icon} />
      </picture>
      <input
        type="text"
        onChange={handleInputChange}
        className={style.input}
        placeholder="Search jobs"
      />
    </div>
  );
};
Search.propTypes = {
  jobs: PropTypes.array,
  setFilteredJobs: PropTypes.func.isRequired,
};
export default Search;
