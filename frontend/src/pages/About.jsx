import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetter from '../components/NewsletterBox'
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-4xl text-center pt-8 border-t">
      <Title text1={'ABOUT'} text2={'US'} />
    </div>
    <div className="my-10  flex flex-col md:flex-row gap-16">
      <img src={assets.about_img} alt="" className='w-full md:max-w-[450px]' />
      <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id fugit quibusdam doloribus, amet ducimus obcaecati, at sunt possimus quae odit ab molestias tempora dolore itaque. Fugiat facilis non possimus consequuntur, adipisci hic in architecto, quos fuga, earum tempora. Saepe consectetur veniam voluptas recusandae accusantium</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit sint, cumque deserunt ex fugit, illum laudantium dignissimos quas commodi explicabo minus? Dolorem cumque perspiciatis ab, delectus harum tempora fuga.</p>
      <b className="text-gray-800">Our Mission</b>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam est non, eligendi mollitia sed sit amet doloribus suscipit pariatur odio! Aliquid quam possimus et, tenetur reiciendis perspiciatis incidunt vitae inventore dolores!</p>
      </div>
    </div>
    <div className="text-4xl py-4 ">
      <Title text1={'WHY'} text2={'CHOOSE US'} />
    </div>
    <div className="flex flex-col md:flex-row text-sm mb-20 ">
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi illo, illum, dolorem odit minus aspernatur ex voluptate ea dicta</p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi illo, illum, dolorem odit minus aspernatur ex voluptate ea dicta </p>
      </div>
      <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis modi illo, illum, dolorem odit minus aspernatur ex voluptate ea dicta </p>
      </div>
    </div>
    <NewsletterBox />
    </div>
  )
}

export default About