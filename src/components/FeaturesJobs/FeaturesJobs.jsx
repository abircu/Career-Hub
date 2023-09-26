import React, { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturesJobs = () => {
  const [jobs, setJobs] = useState([]);
  //   this not the best way to load  show all data
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="mb-12">
      <div className="text-center my-12">
        <h1 className="text-5xl font-bold">Featured Jobs:{jobs.length}</h1>
        <p className="text-xl">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      <div className=" flex justify-center items-center mt-10 mb-10">
        <div className={dataLength === jobs.length && "hidden"}>
          <button
            onClick={() => setDataLength(jobs.length)}
            className="px-5 py-4 rounded-lg bg-indigo-600  font-extrabold text-white  hover:bg-[#7E90FE]"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesJobs;
