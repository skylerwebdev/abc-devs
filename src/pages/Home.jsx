import React from 'react'
import '../styles/Pages.css'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div>
                    <div className="pageMain">
            <div className="pageTop">
                <div className="ptLt"></div>
                <div className="ptCt"><h1 className="ctrHdr">Learn to be part of a world class development team!</h1></div>
                <div className="ptRt"></div>
            </div>
            <div className="pageMid">
                <div className="pmLt">
                    <h2>What does it take to get a job as a developer?</h2>
                    <h4 className='homep'>You just got out of bootcamp or have been coding long enough to get a job. Great! Now what? Do you have what it takes to get a job? Do you know what it takes to get a job?</h4>
                    <ul>
                        <li>Do you have a professional resume?</li>
                        <li>Do you have a portfoilo containing original pieces of work?</li>
                        <li>Do you know how to use Git? What about in a team environment?</li>
                        <li>Do you have a strong Git contribution history?</li>
                        <li>Do you have experience working with other developers?</li>
                        <li>Do you have experience building real world applications?</li>
                    </ul>
                    <h4 className='homep'>If you answered NO to 2 or more of these quetions then chances are you are going to have a very challenging job hunt! We can help you though! <Link>Learn more</Link> about being an intern for ABC Devs <Link>Sign up</Link> for and internship! Spots are limited!</h4>
                </div>
                <div className="pmRt"></div>
            </div>
            <div className="pageBot">
                <div className="pbLt"></div>
                <div className="pbCt"></div>
                <div className="pbRt"></div>
            </div>
        </div>
        </div>
    )
}

export default Home
