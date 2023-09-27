import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const jobId = parseInt(id);
  const job = jobs.find((job) => job.id === jobId);
  console.log(job);

  return (
    <div>
      <h1 className=" text-3xl font-extrabold text-center">Job Details</h1>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border col-span-3 p-6 mt-10 mb-10">
          <h1>
            <span className="text-2xl font-medium">Job Description:</span>
            {job.job_description}
          </h1>
          <h1>
            <span className="text-2xl font-medium">Job Responsibility:</span>
            {job.job_responsibility}
          </h1>
          <h1>
            <span className="text-2xl font-medium">
              Educational Requirements:
            </span>
            <br />
            {job.educational_requirements}
          </h1>
          <h1>
            <span className="text-2xl font-medium">Experiences:</span>
            <br />
            {job.experiences}
          </h1>
        </div>
        <div className="border mt-10 mb-10 p-6">
          <h1 className="text-xl font-bold border-b-2">Job Details</h1>
          <h1>Salary:{job.salary}</h1>
          <h2>Job Title:{job.job_title}</h2>
          <h1 className=" border-b-2 font-bold">Contact information</h1>
          <h1>
            <span className="font-bold">Phone:</span>
            {job.contact_information.phone}
          </h1>
          <h1>
            <span className="font-bold">Email:</span>
            {job.contact_information.email}
          </h1>
          <h1 className="border-b-2 mb-2">
            <span className="font-bold">Adress:</span>
            {job.contact_information.address}
          </h1>
          <button className="w-full btn-primary p-4 rounded-lg font-bold">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
