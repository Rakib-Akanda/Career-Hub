const getStoredJobApplication = () => {
  const storedJobApplication = localStorage.getItem("jobApplication");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};

const saveJobApplication = (idInt) => {
  const storedJobApplications = getStoredJobApplication();
  //   const exists = storedJobApplications.find(jobId => jobId.id !== idInt);
  if (!storedJobApplications.includes(idInt)) {
    storedJobApplications.push(idInt);
    localStorage.setItem(
      "jobApplication",
      JSON.stringify(storedJobApplications)
    );
  }
};
export { getStoredJobApplication, saveJobApplication };
