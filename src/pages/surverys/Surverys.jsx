import React, { useEffect, useState } from 'react'
// import { survery } from '../../apis/auth';
import { getAllSurvery } from '../../apis/survery';
import SurveryCard from './SurveryCard';
import Container from '../../components/Shared/Container';
import SectionTitle from '../../components/Shared/SectionTitle';
const Surverys = ({search, query}) => {
    const [allSurvery, setAllSurvery] = useState([])
    useEffect(() => {
      getAllSurvery()
        .then(data => setAllSurvery(data))
    }, [])
    const published= allSurvery.filter(items=> items.status=='Published')
  return (
    <Container>
        <div className='mt-14'>
            <SectionTitle title='All Survey' align='center'/>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
        {
            published.filter((surveryinfo) => {
              return search === '' ? true :
                  (surveryinfo.title && surveryinfo.title.toLowerCase().includes(search)) ||
                  (surveryinfo.selectedCategory && surveryinfo.selectedCategory.toLowerCase().includes(search))
          }).map(survery=> <SurveryCard key={survery._id} survery={survery}/>)
        }
    </div>
    </Container>
  )
}

export default Surverys