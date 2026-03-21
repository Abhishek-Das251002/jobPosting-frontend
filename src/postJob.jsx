import { useState } from "react";
import Navbar from "./myNavbar";
import axios from "axios";
import { toast } from "react-toastify";

const PostJob = () => {

    const [jobDetails, setJobDetails] = useState({
        title: "",
        company: "",
        location: "",
        salary: "",
        jobType: "",
        description: "",
        qualification: "",
    })

    async function handleSubmit(e){
        e.preventDefault()
        try {
            let finalJobDetails = {...jobDetails, qualification: jobDetails.qualification.split(", ")}
            
            const response = await axios.post("https://job-posting-backend-eta.vercel.app/allJobs", finalJobDetails)
            if(response){
                toast.success("Job posted successfully.")
                setJobDetails({
                    title: "",
                    company: "",
                    location: "",
                    salary: "",
                    jobType: "",
                    description: "",
                    qualification: "",
                })
            }
        } catch (error) {
            console.error("Error: ", error)
        }
    }

    function handleChange(e){
        const {name, value} = e.target;
        if(name === "salary"){
            setJobDetails(prev => ({...prev, [name]: Number(value)}))
        }
        else{
            setJobDetails(prev => ({...prev, [name]: value}))
        }   
    }

    return (
        <div>
            <div className="fixedToTop">
                <Navbar/>
                <div className="mainH container">
                    <h2>Post a Job</h2>
                </div>
            </div>
            <div className="postJob container mb-5">
                <form onSubmit={handleSubmit}>
                    <label>Job Title:</label><br />
                    <input type="text" className="form-control" name="title" value={jobDetails.title} onChange={handleChange} required/>
                    <label>Company Name:</label><br />
                    <input type="text" className="form-control" name="company" value={jobDetails.company} onChange={handleChange} required/>
                    <label>Location:</label><br />
                    <input type="text" className="form-control" name="location" value={jobDetails.location} onChange={handleChange} required/>
                    <label>Salary:</label><br />
                    <input type="number" className="form-control" name="salary" value={jobDetails.salary} onChange={handleChange} required/>
                    <label>Job Type:</label><br />
                    <select className="form-select" name="jobType" value={jobDetails.jobType} onChange={handleChange} required>
                        <option value="">---Select-Job Type---</option>
                        <option value="Full-time (On-site)">Full-time (On-site)</option>
                        <option value="Part-time (On-site)">Part-time (On-site)</option>
                        <option value="Full-time (Remote)">Full-time (Remote)</option>
                        <option value="Part-time (Remote)">Part-time (Remote)</option>
                    </select>
                    <label>Job Description:</label><br />
                    <textarea type="text" className="form-control" name="description" value={jobDetails.description} onChange={handleChange} required></textarea>
                    <label>Job Qualifications:</label><br />
                    <textarea type="text" className="form-control" name="qualification" value={jobDetails.qualification} onChange={handleChange} required></textarea>
                    <button type="submit" className="btn btn-primary mt-3">Post Job</button>
                </form>
            </div>
        </div>
    )
}

export default PostJob;