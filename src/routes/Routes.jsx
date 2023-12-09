import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../pages/Home/Home'
import ErrorPage from '../pages/ErrorPage'
import Login from '../pages/userAuthuntating/Login'
import SignUp from '../pages/userAuthuntating/SignUp'
import Pricing from '../pages/PricingPlan/Pricing'
import Contact from '../pages/Contact'
import DashboardLayout from '../layouts/DashboardLayout'
import SurveryForm from '../Dashboard/SurveyDashboard/Page/SurveryForm'
import UserFeedback from '../Dashboard/SurveyDashboard/Page/UserFeedback'
import AdminMessage from '../Dashboard/SurveyDashboard/Page/AdminMessage'
import MySurvery from '../Dashboard/SurveyDashboard/MySurvery/MySurvery'
import SurveryDetails from '../pages/SingleSurvery/SurveryDetails'
import ManageUser from '../Dashboard/AdminDashboard/Page/manageUser/ManageUser'
import PostRequest from '../Dashboard/AdminDashboard/Page/postRequest/PostRequest'
import Response from '../Dashboard/AdminDashboard/Page/PostResponse/Response'
import ADashboard from '../Dashboard/AdminDashboard/Page/ADashboard'
import UserProfile from '../Dashboard/UserProfile'
import PrivateRoutes from '../components/Shared/PrivateRoutes/PrivateRoutes'
import AdminRoutes from '../components/Shared/PrivateRoutes/AdminRoutes'
import UpdateSurvery from '../Dashboard/SurveyDashboard/MySurvery/UpdateSurvery/UpdateSurvery'
import SurveysPage from '../pages/surverys/SurveysPage'
import UserMenu from '../Dashboard/userDashboard/UserMenu'
import SinglePricingplan from '../pages/PricingPlan/SinglePricingplan'
import Payment from '../Dashboard/AdminDashboard/Page/Payment/Payment'
import PaymentHistry from '../Dashboard/AdminDashboard/Page/priceHistory/PaymentHistry'
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/signup',
        element: <SignUp />
      },
      {
        path: '/pricing-plan',
        element: <Pricing/>
      },
      {
        path: '/contact-us',
        element: <Contact/>
      },
      {
        path: '/all-surveys',
        element: <SurveysPage/>
      },
      {
        path: '/survery/:id',
        element: <SurveryDetails/>
      },
      {
        path: '/prcing-plan/:id',
        element: <SinglePricingplan/>
      },
    ],
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
      {
        path: 'create-survey',
        // element: <SurveryForm/>
        element: <PrivateRoutes><SurveryForm/></PrivateRoutes>

      },
      {
        path: 'feedback',
        element:<UserFeedback/>
      },
      {
        path: 'admin-message',
        element:<AdminMessage/>
      },
      {
        path: 'my-survery',
        element:<MySurvery/>
      },
      // User page or Routes
      {
        path: 'user',
        element:<UserMenu/>
      },
      // Admin pages
      {
        path: 'manage-user',
        element: <PrivateRoutes><AdminRoutes><ManageUser/></AdminRoutes></PrivateRoutes>
       
      },
      {
        path: 'post-request',
        element: <PrivateRoutes><AdminRoutes> <PostRequest/> </AdminRoutes></PrivateRoutes>
      },
      {
        path: 'payment-report',
        element: <PrivateRoutes><AdminRoutes> <PaymentHistry/> </AdminRoutes></PrivateRoutes>
      },
      {
        path: 'response',
        element:<PrivateRoutes><AdminRoutes> <Response/> </AdminRoutes></PrivateRoutes>
      },
      {
        path: 'dashboard',
        element: <PrivateRoutes><AdminRoutes> <ADashboard/> </AdminRoutes></PrivateRoutes>
      },
      {
        path: 'updateservery/:id',
        element: <PrivateRoutes> <UpdateSurvery/> </PrivateRoutes>
      },
      {
        path: 'profile',
        element: <PrivateRoutes><UserProfile/></PrivateRoutes>
      },
    ]
  }
])
