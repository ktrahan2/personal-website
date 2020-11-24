import React from 'react'

export default function Home() {
    return (
        <>
            <header>
                <div id="name-container">
                    <h1 id="name-header">Kyle Trahan</h1>
                </div>
            </header>
            <main>
                <div class="post-container" id="top-left-div">
                    <h2 class="post" id="who-i-am">Who I Am</h2>
                </div>
                <div class="post-container" id="top-right-div">
                    <h2 class="post" id="projects">Projects</h2>
                </div>
                <div class="post-container" id="bottom-left-div">
                    <h2 class="post" id="hobbies">Hobbies</h2>
                </div>
                <div class="post-container" id="bottom-right-div">
                    <h2 class="post" id="contact-information">Contact Information</h2>
                </div>
            </main>
            <footer>
                
            </footer>
        </>
    )
}
