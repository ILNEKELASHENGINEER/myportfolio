import React from 'react'
import EducationItem from './EducationItem'

const data = [
    {
        year:"2021 - 2025" ,
        grade:"B.E. CSE",
        title:'Kongu Engineering College',
        score: "8.34 CGPA (curr)",
        details:
        'I am currently pursuing my Bachelor of Engineering (B.E) degree in Computer Science at Kongu Engineering College, Erode.Through my studies, I have gained proficiency in various programming languages and tools, and I have worked on several projects that apply theoretical knowledge to practical scenarios.'
        
    },
    {
        year:"2020 - 2021",
        grade:"HSLC",
        title:'Santhanam Vidhyalaya CBSE',
        score: "89.6%",
        details:
        'I completed my 12th grade in my hometown of Trichy. This period of my education laid a strong foundation in mathematics, physics, and computer science, which ignited my passion for pursuing a career in engineering and technology.'
        
    },
    {
        year:"2018 - 2019",
        grade:'SSLC',
        title:'Santhanam Vidhyalaya CBSE',
        score: "85.4%",
        details:
        'I completed my 10th grade in my hometown of Trichy.'
        
    }
]

const Education = () => {
  return (
    <div id='education' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-10'>Education</h1>
            {
                data.map((items,idx)=>(
                    <EducationItem key={idx} year={items.year} title={items.title} details={items.details} grade={items.grade} score={items.score}/>
                ))
            }
        
    </div>
  )
}

export default Education