import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import HomePage from './routes/HomePage'
import AboutMe from './routes/AboutMe'
import Resume from './routes/Resume'
import Projects from './routes/Projects'

// Router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "aboutme",
        element: <AboutMe />,
      },
      {
        path: "resume",
        element: <Resume />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
