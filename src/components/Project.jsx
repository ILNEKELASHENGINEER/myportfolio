import React from 'react'
import ProjectItem from './ProjectItem'
import senthurimg from '../assets/senthu-medicals.png'
import darkpimg from '../assets/Dark-pattern.png'
import vagrantimg from '../assets/Vagrant-proj1.png'
import dockimg from '../assets/dockerimg.png'

// import png1 from '../assets/png1.png'
// import png1 from '../assets/png1.png'
// import png1 from '../assets/png1.png'
// import png1 from '../assets/png1.png'
import proimg from '../assets/netflix.png'

const Project = () => {
  return (
    <div id ='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h1>
        <p className='py-8 font-sans text-justify font-medium mb-4'>
        I have developed and automated cloud infrastructure on AWS using Terraform and Ansible,
         setting up CI/CD pipelines with Jenkins and containerizing applications with Docker.
          Additionally, I managed Kubernetes clusters with Amazon EKS, enhancing performance and reliability using Prometheus and Grafana for monitoring. 
          I have also integrated various DevOps tools, including Git, Jenkins, Maven, Ansible, and Docker,
           to create seamless development workflows. Moreover, I have built user-friendly front-end interfaces using HTML, CSS, and JavaScript,
            complementing my back-end and DevOps expertise.
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={senthurimg} title="E-pharmacy Webapp" name="Python project" link='https://github.com/ILNEKELASHENGINEER/Senthur_Medicals'/>
            <ProjectItem img={vagrantimg} title="Project Deployment" name="Vagrant provision" link='https://github.com/ILNEKELASHENGINEER/Devops/tree/main/Project-deploy-Automated'/>
            <ProjectItem img={darkpimg} title="DPBH'23" name="Hackathon project" link='https://github.com/ILNEKELASHENGINEER/Dark_Pattern'/>
            <ProjectItem img={dockimg} title="Docker Projects" name="Devops" link='https://github.com/ILNEKELASHENGINEER/Devops/tree/main/Docker'/>
            
        </div>
        <div className='flex justify-center items-center m-8 mt-8'>
        <a href='https://github.com/ILNEKELASHENGINEER' className='font-mono font-bold text-center text-[#0445e9] underline mt-8'>Show More on Github</a>
      </div>
    </div>
  )
}

export default Project