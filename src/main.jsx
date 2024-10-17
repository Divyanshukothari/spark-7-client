import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider } from 'react-router-dom' 
import Frontpage from './components/Frontpage.jsx'
import InstructionsPage from './components/Instructions.jsx'
import UserDetails from './components/Userdetails.jsx'
import MCQ from './components/MCQ.jsx'
import ThankYouPage from './components/ThankYouPage.jsx'


const router = createBrowserRouter([{

  path:"/",
  element:  <Frontpage/>

},{
  path:"/instruction",
  element:<InstructionsPage/>

},{

  path:"/userdetails",
  element:<UserDetails/>

},{
  path:'/mcq',
  element:<MCQ/>
},{
  path :"/thankyou",
  element:<ThankYouPage/>
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
