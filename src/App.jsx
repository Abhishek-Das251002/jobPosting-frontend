import useFetch from "./useFetch";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from "./myNavbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
const App = () => {
  const {data, error, loading, refetch} = useFetch("https://job-posting-backend-eta.vercel.app/allJobs")
  const navigate = useNavigate()

  const [filterData, setFilterData] = useState([])

  async function handleDelete(jobId){
    try {
      const response = await axios.delete(`https://job-posting-backend-eta.vercel.app/allJobs/${jobId}`)
      if(response){
        toast.error("Job posting Deleted.")
        refetch()
      }
    } catch (error) {
      console.error("Error: ", error)
    }
  }

  function handleSearch(e){
    const {value} = e.target;
    setFilterData(data?.filter(job => job.title.toLowerCase().includes(value)))
  }

  useEffect(() => {
    setFilterData(data)
  },[data])

  console.log(data)
  return (
    <div>
      <div className="fixedToTop">
        <Navbar/>
        <div  className="container">
          <div>
            <input type="text" className="form-control mt-3" placeholder="Search by job title..." onChange={handleSearch}/>
          </div>
          <div className="mainH">
            <h2>All Jobs</h2>
          </div>
        </div>
      </div>
      <div className="body container">
        {loading
        ?
        <p className="text-center text-secondary fs-5 mt-5">Loading...</p>
        :
        <div className="row">
          {filterData?.map(job => (
            <div className="col-lg-4 col-sm-12 col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text"><strong>Company name: </strong>{job.company}</p>
                <p className="card-text"><strong>Location: </strong>{job.location}</p>
                <p className="card-text"><strong>Job Type: </strong>{job.jobType}</p>
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-primary w-100" onClick={() => navigate(`/jobs/${job._id}`)}>See Details</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-danger w-100" onClick={() => handleDelete(job._id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      }
      </div>
    </div>
  )
}

export default App;