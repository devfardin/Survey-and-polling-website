import React from 'react'

const SectionTitle = ({title,align}) => {
  return (
    <div>
         <h1 className={`text-${align} text-3xl font-medium mb-3`}>{title}</h1>
    </div>
  )
}

export default SectionTitle