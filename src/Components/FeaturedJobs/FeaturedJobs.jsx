import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  // this is not the best way to load data show all data
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div className="my-24">
      <div className="text-center">
        <div className="mb-16">
          <h2 className="text-5xl">Featured Jobs: {jobs.length}</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {jobs.slice(0, dataLength).map((job) => (
            <Job key={job.id} job={job}></Job>
          ))}
        </div>
      </div>
      <div
        className={`${
          dataLength === jobs.length && "hidden"
        } my-10 text-center`}
      >
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-primary"
        >
          Show All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
