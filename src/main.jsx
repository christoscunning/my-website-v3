// Libraries
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { Provider } from 'react-redux'

// My files
import './index.css'
import store from './app/store'

// Routes
import Root from './routes/root'
import ErrorPage from './error-page'
import HomePage from './routes/HomePage'
import AboutMe from './routes/AboutMe'
import Resume from './routes/Resume'
import Projects from './routes/Projects'
import Quarto from './routes/Quarto'
import TestBench from './routes/TestBench'

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
      {
        path: "quarto",
        element: <Quarto />,
      },
      {
        path: "testbench",
        element: <TestBench />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
)
