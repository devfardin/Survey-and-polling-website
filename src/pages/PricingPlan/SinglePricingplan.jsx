import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pricingData } from '../../apis/survery'
import Container from '../../components/Shared/Container'
import Payment from '../../Dashboard/AdminDashboard/Page/Payment/Payment'
import Loader from '../../components/Shared/Loading/Loader'

const SinglePricingplan = () => {
    const { id } = useParams()

    const [PricingData, setPricingData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        pricingData(id)
            .then(data => {
                setPricingData(data)
                setLoading(false)
            })
    }, [])



    return (
        <Container>
            {
                loading ? <Loader /> :
                    <div className='max-w-2xl mx-auto shadow-sm border rounded py-10'>
                        <div className='text-3xl font-medium text-gray-700 text-center'>Packege: <span className='text-gray-500'>{PricingData.name}</span>
                            <h1 className='text-2xl font-medium pt-4 text-gray-500'>{PricingData.price}</h1>
                            <p className='text-xl font-normal text-gray-400'>{PricingData.description}</p>
                        </div>
                        <div className='p-10'>
                            <Payment pricingData={PricingData} />
                        </div>
                    </div>
            }
        </Container>
    )
}

export default SinglePricingplan