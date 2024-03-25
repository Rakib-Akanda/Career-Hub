import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../Utility/Localstorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);

  const handleApplyJob = () => {
    saveJobApplication(idInt);
    toast('You have applied successfully')
  };
  return (
    <div className="my-20">
      <div className="grid  gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 p-10">
          <h1 className="text-4xl"> Details coming here</h1>
          <h2 className="text-2xl">Job Details of: {job.job_title} </h2>
          <p>{job.company_name}</p>
        </div>
        <div className="border p-10">
          <h2 className="text-2xl">Side things</h2>
          <button onClick={handleApplyJob} className="btn btn-primary">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default JobDetails;
