import React from 'react'
import patient from '../assets/patient.jpg'
import pulse from '../assets/pulse.svg'
import brain from '../assets/brain.svg'
import bone from '../assets/bone.svg'
import baby from '../assets/baby.svg'
import ambulance from '../assets/ambulance.svg'
import shield from '../assets/shield.svg'
import photo_1 from '../assets/photo_1.jpg'
import photo_2 from '../assets/photo_2.jpg'
import photo from '../assets/photo.jpg'
import men from '../assets/men.jpg'
import cancer from '../assets/cancer.jpg'

const Departements = () => {
  return (
    
   <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 my-12 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ">
     
    
    <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={patient} className='relative h-35 w-100 object-cover rounded-t-xl' />

          <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={pulse} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Cardiology</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Comprehensive cardiovascular care with advanced diagnostic techniques and treatment options for heart conditions, ensuring optimal cardiac health for all patients.</p>
    </div>

     <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={photo} className='relative h-35 w-100 object-cover rounded-t-xl' />

          <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={brain} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Neurology</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Expert neurological care specializing in brain and nervous system disorders, providing cutting-edge treatments and compassionate support for neurological conditions.</p>
    </div>

     <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={photo_1} className='relative h-35 w-100 object-cover rounded-t-xl' />

          <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={bone} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Orthopedics</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Advanced musculoskeletal care focusing on bones, joints, and muscles with innovative surgical and non-surgical treatment approaches for mobility restoration.</p>
    </div>

     <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={photo_2} className='relative h-35 w-100 object-cover rounded-t-xl' />

          <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={baby} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Pediatrics</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Specialized healthcare for children from infancy through adolescence, offering comprehensive medical care in a child-friendly environment with experienced pediatric specialists.</p>
    </div>

   <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={cancer} className='relative h-35 w-100 object-cover object-center rounded-t-xl' />

           <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={shield} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Oncology</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Comprehensive cancer care with multidisciplinary approach, offering advanced treatment options, clinical trials, and compassionate support throughout the cancer journey.
          .</p>
     </div>

      <div className='relative bg-white border w-80 h-100 rounded-2xl border-white mb-5 transition-transform duration-300 hover:scale-105 shadow-md'>
         <img src={men} className='relative h-35 w-100 object-cover rounded-t-xl' />

          <div className="relative">
           <div className="rounded-full bg-[#3DACD1] w-14 h-14 absolute top-[-30px] left-10  flex items-center justify-center overflow-hidden">
            <img src={ambulance} className="w-8 h-8 object-cover" />
          </div>
          </div>


         <p className='mt-15 px-7 font-poppins text-2xl text-[#09313E] font-bold'>Emergency Care</p>
         <p className='mt-3 px-7 text-justify text-gray-700'>Round-the-clock emergency medical services with rapid response capabilities, state-of-the-art equipment, and experienced emergency physicians for critical care.</p>
    </div>


       
        
    </div>
  )
}

export default Departements