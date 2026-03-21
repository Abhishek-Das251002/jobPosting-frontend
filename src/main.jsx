import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import PostJob from './postJob.jsx'
import JobDetails from './jobDetails.jsx'
import { ToastContainer, Bounce} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    element: <App/>,
    path: "/"
  },
  {
    element: <PostJob/>,
    path: "/postJob"
  },
  {
    element: <JobDetails/>,
    path: "/jobs/:id"
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
      />
  </StrictMode>,
)
