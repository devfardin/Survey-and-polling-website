import { useState } from 'react'
// Components
import MenuItem from './MenuItem'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings, FcSurvey } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { FaEnvelope, FaHome, FaMoneyCheckAlt } from "react-icons/fa";
import useAuth from '../hooks/useAuth'
import useRole from '../hooks/useRole'
import SurveryMenu from './SurveyDashboard/SurveryMenu'
import AdminMenu from './AdminDashboard/AdminMenu'
import Logo from './DashboardLogo/Logo'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { RiSurveyFill } from 'react-icons/ri'

const Sidebar = () => {
  const [isActive, setActive] = useState(false)
  const navigate = useNavigate()
  const { logOut } = useAuth()
  const handleToggle = () => {
    setActive(!isActive)
  }

  const [role] = useRole()
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success('LogOut successfull')
        navigate('/')
      })
      .catch((error) => {
        toast.error(error?.message)
      })
  }


  return (
    <>
      {/* Small Screen Navbar */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Logo />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
          }  md:translate-x-0  transition duration-200 ease-in-out`} >
        <div>
          <div>
            <div className='w-full hidden md:block px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-50 mx-auto'>
              {/* Dashboard name */}
              {
                role === 'user' && <Logo UserRoleName='User' />

              }
              {
                role === 'surveyor' && <Logo UserRoleName='Surveyor' />

              }
              {
                role === 'admin' && <Logo UserRoleName='Admin' />

              }
            </div>
          </div>
          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/* If a user is host */}
            <nav>
              {/* Menu Items */}
              {
                role === 'proUser' && <>
                  <MenuItem
                    icon={FaHome}
                    label='Home'
                    address='/' />
                  <MenuItem
                    icon={RiSurveyFill}
                    label='All Survey'
                    address='/all-surveys' />
                  <MenuItem
                    icon={FaMoneyCheckAlt}
                    label='Pricing'
                    address='/pricing-plan' />
                  <MenuItem
                    icon={FaEnvelope}
                    label='Contact Us'
                    address='/contact-us' />
                </>
              }
              {
                role === 'surveyor' && <SurveryMenu />

              }
              {
                role === 'admin' && <AdminMenu />
              }
            </nav>
          </div>
          <hr />

          {
            role !== 'proUser' && <>
              <MenuItem
                icon={FaHome}
                label='Home'
                address='/' />
              <MenuItem
                icon={RiSurveyFill}
                label='All Survey'
                address='/all-surveys' />
                </>
          }
          {
            role == 'user' && <>
              <MenuItem
                icon={FaHome}
                label='Home'
                address='/' />
              <MenuItem
                icon={RiSurveyFill}
                label='All Survey'
                address='/all-surveys' />
                </>
          }

        </div>
        <div>
          <hr />
          <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
          />
          <button onClick={handleLogOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Sidebar