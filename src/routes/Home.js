import React from 'react'
import PostSection from "../components/PostSection"

export default function Home() {

    return (
        <>
            <header>
                <div id="name-container">
                    <h1 id="name-header">Kyle Trahan</h1>
                </div>
            </header>
            <main>
                <PostSection />
            </main>
        </>
    )
}
