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
            content: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac maximus odio. Praesent vel interdum magna, vitae posuere lacus. Proin scelerisque ultricies augue at posuere. Quisque sollicitudin lorem eget vestibulum convallis. Maecenas fermentum sapien quis blandit commodo. Suspendisse vel ex odio. Vestibulum quis facilisis ligula, ut pellentesque nisi. Phasellus vestibulum quam ut auctor feugiat. Vestibulum hendrerit tempus diam id dignissim. Etiam enim turpis, scelerisque at leo quis, tempus volutpat purus. Mauris tempus quis orci eget elementum. Ut consequat elit quis porttitor fringilla. Proin ultricies sodales turpis ac hendrerit. Sed lacinia, augue sed dapibus commodo, sem lorem volutpat lectus, quis pellentesque enim tortor sed mauris." ],
            rotationDirection: "right",
            renderFunction: <Projects/>
        }, 
        {
            //create scroller for photos from travel etc 
            title: "Hobbies",
            content: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac maximus odio. Praesent vel interdum magna, vitae posuere lacus. Proin scelerisque ultricies augue at posuere. Quisque sollicitudin lorem eget vestibulum convallis. Maecenas fermentum sapien quis blandit commodo. Suspendisse vel ex odio. Vestibulum quis facilisis ligula, ut pellentesque nisi. Phasellus vestibulum quam ut auctor feugiat. Vestibulum hendrerit tempus diam id dignissim. Etiam enim turpis, scelerisque at leo quis, tempus volutpat purus. Mauris tempus quis orci eget elementum. Ut consequat elit quis porttitor fringilla. Proin ultricies sodales turpis ac hendrerit. Sed lacinia, augue sed dapibus commodo, sem lorem volutpat lectus, quis pellentesque enim tortor sed mauris." ],
            rotationDirection: "left",
            renderFunction: <Hobbies />
        }, 
        {
            title: "Contact",
            content: [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac maximus odio. Praesent vel interdum magna, vitae posuere lacus. Proin scelerisque ultricies augue at posuere. Quisque sollicitudin lorem eget vestibulum convallis. Maecenas fermentum sapien quis blandit commodo. Suspendisse vel ex odio. Vestibulum quis facilisis ligula, ut pellentesque nisi. Phasellus vestibulum quam ut auctor feugiat. Vestibulum hendrerit tempus diam id dignissim. Etiam enim turpis, scelerisque at leo quis, tempus volutpat purus. Mauris tempus quis orci eget elementum. Ut consequat elit quis porttitor fringilla. Proin ultricies sodales turpis ac hendrerit. Sed lacinia, augue sed dapibus commodo, sem lorem volutpat lectus, quis pellentesque enim tortor sed mauris."],
            rotationDirection: "right",
            renderFunction: <ContactInformation />
        }, 
    ]
    return postSectionArray
}
