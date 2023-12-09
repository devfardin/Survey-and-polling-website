import Faq from "../Faq"
import Hero from "./Hero"
import HowToWork from "./HowToWork"
import TestimonialSlider from "./TestimonialSlider"
import FeatureSurvey from "../FeatureSurvey/FeatureSurveys"
const Home = () => {
  return (
    <div>
      <Hero className='bg-primery'></Hero>
      <FeatureSurvey > </FeatureSurvey>
      <HowToWork></HowToWork>
      <TestimonialSlider> </TestimonialSlider>
      <Faq />
    </div>
  )
}
export default Home
