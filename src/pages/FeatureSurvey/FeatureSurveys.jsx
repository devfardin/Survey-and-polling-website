import React, { useEffect, useState } from 'react'
import FeatureSurveyCard from './FeatureSurveyCard'
import SectionTitle from '../../components/Shared/SectionTitle'
import Container from '../../components/Shared/Container'
import { getAllSurvery } from '../../apis/survery'

const FeatureSurvey = () => {
    const [allSurvery, setAllSurvery]=useState([])
    useEffect(() => {
      getAllSurvery()
        .then(data => setAllSurvery(data))
    }, [])
    const published= allSurvery.filter(items=> items.status=='Published')
  return (
    <Container>
    <div className='mt-14'>
        <SectionTitle title='Featured Surveys' align='center'/>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
    {
        published.slice(0,6).map(survery=> <FeatureSurveyCard key={survery._id} survery={survery}/>)
    }
</div>
</Container>
  )
}

export default FeatureSurvey