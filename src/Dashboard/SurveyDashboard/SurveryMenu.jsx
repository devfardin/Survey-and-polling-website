import React from 'react'
import MenuItem from '../MenuItem'
import { VscFeedback } from "react-icons/vsc";
import { RiMessage2Fill } from "react-icons/ri";
import { RiAddBoxLine } from 'react-icons/ri'
import { AiOutlineFileSearch } from "react-icons/ai";


const SurveryMenu = () => {
  return (
    <div>
         <MenuItem
                icon={RiAddBoxLine}
                label='Create Survey'
                address='create-survey' />
            
             
              <MenuItem
                icon={AiOutlineFileSearch}
                label='My Survery'
                address='my-survery' />
    </div>
  )
}

export default SurveryMenu