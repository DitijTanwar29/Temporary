import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchJobDetails } from '../../services/operations/jobPostAPI'; // Implement getJobById function in your job service

const JobDetailsPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);

  console.log("job", job)
  useEffect(() => {
    const fetchJob = async () => {
      const fetchedJob = await fetchJobDetails(jobId); // Implement getJobById function in your job service
      setJob(fetchedJob?.[0]);
    };
    fetchJob();
  }, [jobId]);

  if (!job) {
    return <div className="text-center mt-8">Loading...</div>;
  }


  return (
    <div className="container mx-auto py-8 bg-orange-400 mt-5 rounded-sm">
      <h1 className="text-3xl font-bold mb-4">{job.jobTitle}</h1>
      <p className="text-lg font-medium mb-2">Company: {job.companyName}</p>
      <p className="text-lg font-medium mb-2">Location: {job.jobLocation}</p>
      <p className="text-lg font-medium mb-2">Salary Range: {job.rangeOfSalary}</p>
      <p className="text-lg mb-6">Job Description: {job.jobDescription}</p>

      <div className="bg-white rounded-lg shadow-md p-4">
        <h2 className="text-xl font-semibold mb-4">Requirements</h2>
        <p className="text-lg mb-2">Required Skills: {job.requiredSkills}</p>
        <p className="text-lg mb-2">Required Experience: {job.requiredExperience} years</p>
        <p className="text-lg mb-2">Number of Vacancy: {job.numberOfVacancy}</p>
        <p className="text-lg mb-2">Job Type: {job.jobType}</p>
        <p className="text-lg mb-2">Status: {job.status}</p>
        <p className="text-lg mb-2">License Type: {job.licenseType}</p>
        <p className="text-lg mb-2">Job Start Date: {new Date(job.startDate).toLocaleDateString()}</p>
        <p className="text-lg mb-2">Job End Date: {new Date(job.endDate).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default JobDetailsPage;