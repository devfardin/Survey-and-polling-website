import { Link } from 'react-router-dom'
import Container from '../Container'
import MenuDropdown from './MenuDropdown'
import HeaderNavLink from './HeaderNavLink'

const Navbar = () => {
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/' className='md:flex-1'>
              <img
                className='w-[200px] md:w-[200px] lg:w-[200px]'
                src='https://i.ibb.co/CPRf5Tp/1200px-Survey-Monkey-Logo-svg.png'
                alt='logo'
                />
            </Link>
            {/* top menu items for header */}
          <div className='md:flex-1 flex justify-end'>
          <HeaderNavLink></HeaderNavLink>
          </div>
            {/* Dropdown Menu */}
            <div className='hidden lg:block'>
            <MenuDropdown />
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}
export default Navbar
