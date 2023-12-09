import React from 'react'
import useRole from '../../hooks/useRole'

const Logo = ({UserRoleName}) => {
    const [role]=useRole()
    return (
        <div>
          <h1 className='text-2xl font-bold mt-1 uppercase tracking-widest text-center'>{UserRoleName}</h1>
          <h1 className='text-lg font-semibold mt-1 uppercase tracking-widest text-center'>Dashboard</h1>
        </div>
    )
}

export default Logo