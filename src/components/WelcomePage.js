import React from 'react';
import './WelcomePage.css';

function WelcomePage(props) {
    return (
        <div className="welcomePage">
            <div className="top">
                <img src={props.user != null? props.user.avatar_url : ''} alt="profile pic"/>
                <div className="mainDetails">
                    <h2>Dor Malka</h2>
                    <h4>FullStack Software Engineer</h4>
                    <span style={{marginTop:'5px', fontSize: '14px'}}><u>Location:</u> Ramat-Gan, Israel</span>
                    <div style={{marginTop:'5px', fontSize: '14px'}}>
                        <u>Contact Methods:</u> 
                        <ul>
                            <li><b>Email:</b> Dormalk@gmail.com</li>
                            <li><b>Mobile:</b> (+972)052-4431050</li>
                        </ul>    
                    </div>
                </div>
            </div>
            <div className="page">
                <h4><u>Who am I?</u></h4>
                <section>
                    <p>
                        I'm software engineer programmer (B.S dgree) and at the middle of M.A studies of 'Design Engineer'.
                    </p>
                    <p>
                        I have extensive knowledge from many types of projects: IOT, CRM, Mobiles, Games and etc.<br/>
                        Has experience in managing and leading teams during the B.A degree studies.
                    </p>
                    <p>
                        These days I'm beginning the second year of M.A. design engineering studies,<br/>
                        Who deals with all the dynamics issues between product design (based web of hardware) and engineering aspect.
                    </p>
                    <p>
                        I'm truly believe in achieve goals using creativity, the base tool to improve creativity is by research that includes - experiment, fail, and re-learning.
                    </p>
                    <p>
                        Hop to get the opportunity to prove myself as appropriate candidate to the role.
                    </p>
                </section>
                <hr/>
                <h4><u>Educations</u></h4>
                <section>
                    <div className="study">
                        <h4 style={{marginBottom:0}}>Design For Engineer - M.A Degree</h4>
                        <p style={{margin:0}}>
                            <span><u>Period</u>: 2018-Today</span> <br/>
                            <span><u>Status</u>: <span style={{color:'orange'}}>Last Year</span></span>
                        </p>
                    </div>
                    <div className="study">
                        <h4 style={{marginBottom:0}}>Software Engineer - B.S Degree</h4>
                        <p style={{margin:0}}>
                            <span><u>Period</u>: 2015-2019</span> <br/>
                            <span><u>Status</u>: <b style={{color: 'green'}}>Graduated</b></span><br/>
                            <span><u>Specialization</u>: Analytic Engineer (Algorithms & Data Structure)</span><br/>
                            <span><u>Non-departmental courses</u>: ACT Creative Leadership 360</span>
                        </p>
                    </div>
                </section>

                <hr/>
                <h4><u>Employment</u></h4>
                <section>
                    <div className="works">
                        <h4 style={{marginBottom:0}}>ServiceWise</h4>
                        <div style={{margin:0}}>
                            <span><u>Job</u>: FullStack Developer</span><br/>
                            <span><u>Period</u>: Feb 2018 - Today</span> <br/>
                            <ul style={{marginTop: 10}}>
                                <li>Develops in salesforce environment.</li>
                                <li>Customization.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="works">
                        <h4 style={{marginBottom:0}}>Freelance</h4>
                        <div style={{margin:0}}>
                            <span><u>Job</u>: FullStack Developer</span><br/>
                            <span><u>Period</u>: Aug 2017 - Today</span> <br/>
                            <ul style={{marginTop: 10}}>
                                <li>Develops websites and web apps for privet consumers.</li>
                            </ul>
                        </div>
                    </div>


                    <div className="works">
                        <h4 style={{marginBottom:0}}>Pisga Cyber</h4>
                        <div style={{margin:0}}>
                            <span><u>Job</u>: Teacher/Guider</span><br/>
                            <span><u>Period</u>: Aug 2017 - Today</span> <br/>
                            <ul style={{marginTop: 10}}>
                                <li>Teaching technologic lessons at schools.</li>
                                <li>Design and create lessons plan.</li>
                                <li>Teaching programing languish: Java, C, C++.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default WelcomePage;