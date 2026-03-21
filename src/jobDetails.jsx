import { useParams } from "react-router-dom";
import Navbar from "./myNavbar";
import useFetch from "./useFetch";

const JobDetails = () => {
    const {data, error, loading} = useFetch("http://localhost:3000/allJobs")
    const {id} = useParams()

    const currListing = data?.filter(job => job._id == id)

    return (
        <div>
            <Navbar/>
            {loading
            ?
            <p className="text-center text-secondary fs-5 mt-5">Loading...</p>
            :
            <div className="container mb-5">
            {currListing?.map(job => (
                <div>
                    <div className="mainH">
                        <h2>{job.title}</h2>
                    </div>
                    <div className="card">
                    <div className="card-body">
                        <p className="card-text"><strong>Company Name: </strong>{job.company}</p>
                        <p className="card-text"><strong>Location: </strong>{job.location}</p>
                        <p className="card-text"><strong>Salary: </strong>{job.salary}</p>
                        <p className="card-text"><strong>Job Type: </strong>{job.jobType}</p>
                        <p className="card-text" style={{textAlign: "justify"}}><strong>Description: </strong>{job.description}</p>
                        <p className="card-text mb-0" style={{textAlign: "justify"}}><strong>Qualifications: </strong></p>
                        <ol>
                            {job.qualification.map(degree => <li>{degree}</li>)}
                        </ol>
                    </div>
                    </div>
                </div>
            ))}
            </div>
            }
        </div>
    )
}

export default JobDetails;