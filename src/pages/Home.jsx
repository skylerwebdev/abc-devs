import React from 'react'
import '../styles/Pages.css'
const Home = () => {
    return (
        <div className="pageMain">
            <div className="pageTop">
                <div className="ptLt">
                    <h1 className="ptLtHeader">What is ABC Devs?</h1>
                    <p className="ptLtP">After Bootcamp Devs AKA ABC >= Devs is a place for new developers to sign up for internship positions while they are hunting for work.</p>
                    <h2>Why an internship?</h2>
                    <p>When a person starts coding they don't know what it takes to get a job. They don't understand just how hard it is to get started in the development community. As an intern with us you will get exactly what you need to make it as a developer.</p>
                    <h2>What you will get as an Intern</h2>
                    <ul>
                        <li>Knowledge - Knowledge is power.</li>
                        <ul>
                            You Will learn:
                            <li>New technologies</li>
                            <li>Version Control -- Git in a team environment</li>
                            <li>How to work on a development team</li>
                            <li>How to work in a development environment</li>
                            Most importantly:
                            <li>You will learn how to ship code</li>
                        </ul>
                        <li>Experience working on "Real Life" projects for your resume</li>
                        <li>Items to use as a portfolio piece</li>
                    </ul>
                </div>
                <div className="ptCt"></div>
                <div className="ptRt"></div>
            </div>
            <div className="pageMid">
                <div className="pmLt"></div>
                <div className="pmCt"></div>
                <div className="pmRt"></div>
            </div>
            <div className="pageBot">
                <div className="pbLt"></div>
                <div className="pbCt"></div>
                <div className="pbRt"></div>
            </div>
        </div>
    )
}

export default Home
