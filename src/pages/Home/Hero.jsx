import React from 'react'
import Container from '../../components/Shared/Container'

const Hero = () => {
  return (
    <div className='bg-primery'>
      <Container>
        <div className='flex flex-col md:flex-row justify-between items-center gap-10 pt-16 md:py-10 lg:py-10'>
          <div className='flex-1'>
            <h1 className='text-white text-3xl md:text-3xl lg:text-5xl font-semibold lg:leading-[54px] mb-3 md:mb-6'> Unleashing the Future of Polls and Surveys!</h1>
            <p className='text-sm md:text-base lg:text-lg text-white'>Create surveys and polls effortlessly, gather valuable feedback, and make informed decisions with our intuitive platform. Click 'Explore' to embark on a seamless experience where transforming insights into actionable decisions is as easy as a click. Your data-driven future starts here!</p>
            <button className='text-lg bg-buttonstyle py-3 px-7 hover:bg-buttonHover duration-200 ease-in-ou rounded-lg text-black font-normal block mt-6'>Explore Surveys</button>
          </div>
          <div className='flex-1'>
            <img src="https://i.ibb.co/8rXVb8S/hero-centered-mp-surveymonkey-genius.webp" alt="" />
          </div>
        </div>
      </Container>
    </div>

  )
}

export default Hero