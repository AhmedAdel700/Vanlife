import { createBrowserRouter , createRoutesFromElements , RouterProvider , Route } from "react-router-dom"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Vans , {loader as vansLoader} from "./Pages/Vans"
import VanDetails ,{loader as vansDetailsLoader} from "./Pages/VanDetails"
import Dashboard ,{ loader as dashboardLoader } from "./components/Dashboard"
import Income from "./components/Income"
import HostVans ,{loader as HostVansLoader} from "./components/HostVans"
import HostVansDetails ,{loader as HostVansDetailsLoader} from "./components/HostVansDetails"
import Detalis from "./components/Details"
import Pricing from "./components/Pricing"
import Photos from "./components/Photos"
import Reviews from "./components/Reviews"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import PageNotFound from "./Pages/PageNotFound"
import LogIn ,{ loader as loginLoader , action as loginAction } from "./Pages/LogIn"
import Error from "./components/Error"
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import "./server"
// import { requireAuth } from "./utils"
export default function App() {

  const router = createBrowserRouter(createRoutesFromElements(
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>} loader={dashboardLoader} />
            <Route path="income" element={<Income />} /> 
            <Route path="vans" element={<HostVans />} loader={HostVansLoader} />

            <Route path="vans/:id" element={<HostVansDetails />} errorElement={<Error />} loader={HostVansDetailsLoader}>
              <Route index element={<Detalis />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="photos" element={<Photos />} />
            </Route>

            <Route path="reviews" element={<Reviews />} />
          </Route>
          
          <Route path='vans' element={<Vans />} errorElement={<Error />} loader={vansLoader}/>
          <Route path='vans/:id' element={<VanDetails />} errorElement={<Error />} loader={vansDetailsLoader} />
          <Route path="login" element={<LogIn />} loader={loginLoader} action={loginAction} />
          <Route path="*" element= {<PageNotFound />} />

        </Route>
  ))

  return (
    <RouterProvider router={router} />
  )
}
