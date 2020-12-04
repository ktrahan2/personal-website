import AboutMe from "../components/AboutMe"
import ContactInformation from "../components/ContactInformation"
import Projects from "../components/Projects"
import Hobbies from "../components/Hobbies"
import React, { useState, useEffect } from 'react'

export default function PostSectionArrayConfig() {

    const [ isActiveProject, setActiveProject ] = useState("")
    
    useEffect( () => {
        setActiveProject(0)
    }, [])

    const postSectionArray =   
    [
        {
            title: "About Me",
            content: [ "I am a Software Developer in Denver, CO. I was introduced to coding through a python course and fell in love with it. This led to me jumping into a coding school in order to further expand my skills. I thoroughly enjoy figuring out how to take someones design dreams and turning them into a reality.", "I would love to be able to use technology in order to connect people to the outdoors. I have a passion for the outdoors and enjoy spending most of my free time being outside! Followed closely by a love for travel. I have spent most of my professional career traveling primarily in the United States and Canada. However, I also spent a fair amount of time working and living in China, Thailand, and New Zealand!"],
            rotationDirection: "left",
            renderFunction: <AboutMe/>
        }, 
        {
            //create scroller for different projects worked on
            title: "Projects",
            content: [ "Coming Soon" ],
            rotationDirection: "right",
            renderFunction: 
                <Projects        
                    isActiveProject={isActiveProject}
                    setActiveProject={setActiveProject}
                />
        }, 
        {
            //create scroller for photos from travel etc 
            title: "Hobbies",
            content: [ "Coming Soon" ],
            rotationDirection: "left",
            renderFunction: <Hobbies />
        }, 
        {
            title: "Contact",
            content: [ "Email - ktrahan2@gmail.com", "Github  - https://github.com/ktrahan2", "Linkedin - https://www.linkedin.com/in/kyletrahan/"],
            rotationDirection: "right",
            renderFunction: <ContactInformation />
        }, 
    ]
    return postSectionArray
}
