/*
descargar iconos:  https://www.flaticon.es
*/ 

import { useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Search from "./components/search/Search";

const jobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: {
      name: "Google",
      logo: "/google.png",
    },
    location: {
      city: "Australia",
      logo: "/australia.png",
    },
    salary: "50,000 - 60,000",
    type: "Full time",
  },
  {
    id: 2,
    title: "Backend Developer",
    company: {
      name: "Facebook",
      logo: "/facebook.png",
    },
    location: {
      city: "USA",
      logo: "/usa.png",
    },
    salary: "50,000 - 60,000",
    type: "Full time",
  },
  {
    id: 3,
    title: "Fullstack Developer",
    company: {
      name: "Amazon",
      logo: "/amazon.png",
    },
    location: {
      city: "USA",
      logo: "/usa.png",
    },
    salary: "$100,000 - $160,000",
    type: "Full time",
  },
];
function App() {
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  return (
    <>
      <Header />
      <Search setFilteredJobs={setFilteredJobs} jobs={jobs} />
      <div className="nombre_of_results">
        {filteredJobs.length} jobs found
      </div>
      <div className="jobs_list">
        {filteredJobs.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </>
  );
}

export default App;
