import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className=" my-10">
      <div className="text-center my-10">
        <h1 className="text-5xl font-bold">Featured Jobs:{jobs.length}</h1>
        <p className="text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesJobs;
