import React from 'react'
import { ImGithub } from "react-icons/im";
import { IoLogoLinkedin } from "react-icons/io";
import p1 from '../Image/om.png'
import p2 from '../Image/sp.png'
import p3 from '../Image/sp1.png'
import p4 from '../Image/mj.png'
import p5 from '../Image/av.png'
import p0 from '../Image/ar.png'




function Team() {
    const teams=[
        {
            name:"Aditya Rathor",
            img:p0,
            linkdin:"",
            github:"https://github.com/adityarathor007"
        },
        {
            name:"Sumeet Patil",
            img:p3,
            linkdin:"",
            github:"https://github.com/ssp-8"
        },
        {
            name:"Swaksh Patwari",
            img:p2,
            linkdin:"",
            github:"https://github.com/SwakshPatwari5"
        },
        {
            name:"Om kumar",
            img:p1,
            linkdin:"",
            github:"https://github.com/OmKumar2004"
        },
        {
            name:"Manya Jain",
            img:p4,
            linkdin:"",
            github:"https://github.com/manya2237"
        },

        {
            name:"Avani Rai",
            img:p5,
            linkdin:"",
            github:"https://github.com/avani-rai"
        },
    ]
  return (
    <div>
            <p className='header_Problem'>Team</p>
            <div className='container'>
                {teams.map((team,index)=>(
                    
                <div key={index} className='profile_container'>
                    <img src={`${team.img}`} alt="" style={{ width: '100px', height: '120px' }} className='prfile_pic'/>
                    <h4>{team.name}</h4>
                    <a href={team.github} target="_blank" rel="noopener noreferrer"> <ImGithub  size={30} color='black'style={{marginRight:"15px"}}/></a>

                </div>
                ))}
            </div>

    </div>
  )
}

export default Team
