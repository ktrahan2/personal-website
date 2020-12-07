import AboutMe from "../components/AboutMe"
import ContactInformation from "../components/ContactInformation"
import Projects from "../components/Projects"
import Hobbies from "../components/Hobbies"
import React from 'react'

export default function PostSectionArrayConfig() {

    const postSectionArray =   
    [
        {
            title: "About Me",
            content: [ "My name is Kyle Trahan. I recently graduated from a coding bootcamp but for the last 6 years I have been traveling around the world building and maintaining Ziplines and Ropes courses. I really enjoyed the problem solving aspects of this career.",
                "During my years as a builder I discovered a love for travel. I began to dabble in a few adventure activities. I worked as a Divemaster in Thailand and a Whitewater rafting guide in West Virginia.", 
                "Before all of that I attended George Mason University where I got a degree in Criminology."
            ],
            rotationDirection: "left",
            renderFunction: <AboutMe/>
        }, 
        {
            //create scroller for different projects worked on
            title: "Projects",
            content: [ "Might end up being lorem ipsum" ],
            rotationDirection: "right",
            renderFunction: 
                <Projects/>
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
