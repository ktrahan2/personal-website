import React, { useState } from 'react'

export default function Home() {

    const [ isActiveQuadrant, setActiveQuadrant ] = useState("")

    const quadrantArray = ["who-i-am", "projects", "hobbies", "contact-information"]

    return (
        <>
            <header>
                <div id="name-container">
                    <h1 id="name-header">Kyle Trahan</h1>
                </div>
            </header>
            <main>
                <div 
                    className={isActiveQuadrant === "who-i-am" ? 
                        "quadrant expand-quadrant" 
                        : "quadrant"
                    } 
                    id="top-left-div"
                >
                    <div 
                        className={isActiveQuadrant === "who-i-am" ? 
                            "post-container expand-post-container" 
                            : "post-container rotate-left"
                        } 
                        id="who-i-am"
                        onClick={ 
                            isActiveQuadrant === "who-i-am" ? 
                                () => setActiveQuadrant("") 
                            :
                                () => setActiveQuadrant("who-i-am")
                        }
                    >
                        <h2 className="post-title" >Who I Am</h2>
                        <p className="post-information">scribble scrabble</p>
                    </div>
                </div>
                <div 
                    className={isActiveQuadrant === "projects" ? 
                        "quadrant expand-quadrant" 
                        : "quadrant"
                    } 
                    id="top-right-div"
                >
                    <div 
                        className={isActiveQuadrant === "projects" ? 
                            "post-container expand-post-container" 
                            : "post-container rotate-right"
                        } 
                        id="projects"
                        onClick={ 
                            isActiveQuadrant === "projects" ? 
                                () => setActiveQuadrant("") 
                            :
                                () => setActiveQuadrant("projects")
                        }
                    >
                        <h2 className="post-title" >Projects</h2>
                        <p className="post-information"></p>
                    </div>
                </div>
                <div 
                    className={isActiveQuadrant === "hobbies" ? 
                        "quadrant expand-quadrant" 
                        : "quadrant"
                    } 
                    id="bottom-left-div"
                >
                    <div 
                        className={isActiveQuadrant === "hobbies" ? 
                            "post-container expand-post-container" 
                            : "post-container rotate-left"
                        } 
                        id="hobbies"
                        onClick={ 
                            isActiveQuadrant === "hobbies" ? 
                                () => setActiveQuadrant("") 
                            :
                                () => setActiveQuadrant("hobbies")
                        }
                    >
                        <h2 className="post-title">Hobbies</h2>
                        <p className="post-information"></p>
                    </div>
                </div>
                <div 
                        className={ isActiveQuadrant === "contact-information" ? 
                            "quadrant expand-quadrant" 
                            : "quadrant"
                        } 
                        id="bottom-right-div"
                >
                    <div 
                        className={ isActiveQuadrant === "contact-information" ? 
                            "post-container expand-post-container" 
                            : "post-container rotate-right"
                        } 
                        id="contact-information"
                        onClick={ 
                            isActiveQuadrant === "contact-information" ? 
                                () => setActiveQuadrant("") 
                            :
                                () => setActiveQuadrant("contact-information")
                        }                    >
                        <h2 className="post-title">Contact</h2>
                        <p className="post-information"></p>
                    </div>
                </div>
            </main>
            <footer>
                
            </footer>
        </>
    )
}
