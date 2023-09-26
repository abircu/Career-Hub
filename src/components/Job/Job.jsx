import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiFillDollarCircle } from "react-icons/ai";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact bg-base-200 shadow-xl">
        <div className="flex justify-start items-start px-3 py-2">
          <img src={logo} alt="" />
        </div>
        <div className="card-body">
          <h2 className="card-title text-2xl font-extrabold">{job_title}</h2>
          <p className="text-[#757575] text-xl font-semibold">{company_name}</p>
          <div className="flex gap-4">
            <button className="px-3 py-2 rounded-lg border-solid border-2 border-indigo-600  font-extrabold text-[#7E90FE]">
              {remote_or_onsite}
            </button>
            <button className="px-3 py-2 rounded-lg border-solid border-2 border-indigo-600 font-extrabold text-[#7E90FE] ">
              {job_type}
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex justify-start items-center text-xl font-semibold text-[#757575]">
              <p>
                <HiOutlineLocationMarker></HiOutlineLocationMarker>
              </p>
              <p>{location}</p>
            </div>
            <div className="flex justify-start items-center text-xl font-semibold text-[#757575]">
              <p>
                <AiFillDollarCircle />
              </p>
              <p>{salary}</p>
            </div>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary font-extrabold">
              view details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
