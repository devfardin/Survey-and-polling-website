import React from 'react'
import Container from '../../components/Shared/Container'
import SectionTitle from '../../components/Shared/SectionTitle'

const HowToWork = () => {
    return (
        <div className='mt-16'>
       <Container>
        <SectionTitle title='How it works' align='center'/>
         <div className='flex  items-center gap-10'>
          <div className='flex-1'>
          <video width="100%" height="100%" autoPlay loop={true}>
                <source src="https://prod.smassets.net/assets/content/sm/build-with-ai-white-mp-surveymonkey-genius.webm" type="video/mp4"/>
            </video>
          </div>

          <div className='flex-1'>
          
          <div className='flex flex-col gap-4'>
            <p  className='text-sm md:text-base lg:text-md text-gray-600'>Tailor your survey experience to perfection with our versatile platform. Whether you're in need of inspiration or have a specific vision in mind, choose from our array of sample prompts or craft a personalized description that aligns precisely</p>

            <p  className='text-sm md:text-base lg:text-md text-gray-600'>Empowering your survey creation journey, SurveyMonkey Genius, powered by GPT, takes automation to the next level. Seamlessly automate the entire survey creation process, harnessing the intelligence of GPT to craft surveys that resonate</p>
         
            <p  className='text-sm md:text-base lg:text-md text-gray-600'>To perfect your survey, effortlessly refine your prompts or make direct edits to the generated survey. Our user-friendly interface makes customization a breeze, allowing you to fine-tune every aspect until it aligns seamlessly with your vision.</p>
          </div>
           
          </div>
        </div>
       </Container>

      

       </div>
    )
}

export default HowToWork