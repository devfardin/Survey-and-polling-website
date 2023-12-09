import React from 'react'
import SectionTitle from '../../components/Shared/SectionTitle'
const TestimonialSlider = () => {
    return (
        <div className=' container lg:w-[90%] mx-auto px-4 mb-16 mt-4'>
           <div className='pb-10'>
           <SectionTitle title="Testimonials" align='center'/>
           </div>
            <div className='flex flex-col md:flex-row justify-between items-start  md:gap-x-10 lg:gap-x-20'>
                <div className='w-[400px]'>
                    <img className='w-full' src="https://surveyfunnel.com/wdp/wp-content/uploads/2021/12/Scored-survey-target-efficiently.jpg" alt="" />
                </div>
                <div className='flex-1 mt-6 md:mt-0'>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item w-full">
                            <div>
                            <img className='w-16 h-16 rounded-full object-cover' src="https://i.ibb.co/D7gfsfL/pexels-simon-robben-614810-min.jpg" alt="" />
                            <h1 className='text-xl text-black font-medium mt-2'>Gabriel Nolan</h1>
                            <p className='text-lg text-black1 font-normal my-4 '>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                            <div className=" flex gap-x-3">
                                <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❮</a>
                                <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❯</a>
                            </div>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item w-full">
                            <div>
                                <img className='w-16 h-16 rounded-full object-cover' src="https://i.ibb.co/mRWVgp7/pexels-pixabay-220453-min.jpg" alt="" />
                            <h1 className='text-xl text-black font-medium mt-2'>Gabriel Nolan</h1>
                            <p className='text-lg text-black1 font-normal my-4 '>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                            <div className=" flex gap-x-3">
                                <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❮</a>
                                <a href="#slide3" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❯</a>
                            </div>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item w-full">
                            <div>
                            <img className='w-16 h-16 rounded-full object-cover' src="https://i.ibb.co/txg8Bnb/pexels-andrea-piacquadio-846741-min.jpg" alt="" />
                            <h1 className='text-xl text-black font-medium mt-2'>Gabriel Nolan</h1>
                            <p className='text-lg text-black1 font-normal my-4 '>Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality Without JobHunt i’d be homeless, they found me a job and got me sorted out quickly with everything! Can’t quite… The Mitech team works really hard to ensure high level of quality</p>
                            <div className=" flex gap-x-3">
                                <a href="#slide2" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❮</a>
                                <a href="#slide1" className="btn btn-circle bg-transparent hover:bg-black1 hover:text-white duration-300">❯</a>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlider