import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utilities/Utilities";

const ApliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplyJobs] = useState([]);
  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplyJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplyJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplyJobs(onsiteJobs);
    }
  };
  useEffect(() => {
    const storedJobsIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsIds.includes(job.id));
      setAppliedJobs(jobsApplied);
      setDisplyJobs(jobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <h2>Jobs i applied:{appliedJobs.length}</h2>

      <details className="dropdown mb-32">
        <summary className="m-1 btn">Filter Jobs</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter("all")}>
            <a>ALL</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>onsite</a>
          </li>
        </ul>
      </details>

      <ul>
        {displayJobs.map((job) => (
          <li key={job.id}>
            <span>
              {job.company_name}:{job.remote_or_onsite}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApliedJobs;
