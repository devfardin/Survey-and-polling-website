import React from 'react'
import MenuItem from '../MenuItem'
import { FaUsersCog } from "react-icons/fa";
import { VscRequestChanges } from "react-icons/vsc";
import { BsFillCreditCard2FrontFill } from "react-icons/bs";
import { MdOutlinePublic } from 'react-icons/md';
import { RxDashboard } from 'react-icons/rx';




const AdminMenu = () => {
    return (
        <div>
            <MenuItem
                icon={RxDashboard}
                label='Dashboard'
                address='dashboard' />

            <MenuItem
                icon={FaUsersCog}
                label='Manage User'
                address='manage-user' />

            <MenuItem
                icon={VscRequestChanges}
                label='Post Request'
                address='post-request' />

            <MenuItem
                icon={MdOutlinePublic}
                label='Response'
                address='response' />

            <MenuItem
                icon={BsFillCreditCard2FrontFill}
                label='Payments'
                address='payment-report' />
        </div>
    )
}

export default AdminMenu