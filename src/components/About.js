// import React, { useState } from 'react'

export default function About(props) {

    // const [mystyle, setMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    // const [btntext, setBtntext] = useState("enable dark mode");

    // const clicktoblackmode = () => {
    //     if (mystyle.color === 'black') {
    //         setMystyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtntext("enable light mode")
    //     }
    //     else {
    //         setMystyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })

    //         setBtntext("enable dark mode")
    //     }
    // }

    let mystyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
        // border : '2px solid',
        // borderColor: props.mode === 'dark' ? 'white' : '#042743'
    }

    return (

        <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1 className='my-3 m-3'>About Us</h1>
            <div className="accordion m-3" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Your Full Name :</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            My Name Is Pavan Ashokbhai Patel.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Your Family members Name : </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            My Father Name is Ashokbhai.My Mother Name is Ashaben.My Sister Naame is Khushbu And Aelish.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Your Introduction :</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            My Name is Pavan Ashokbhai Patel.I Complated Electronics and Commuication Engineering.After That i did a Summer Internship 15 to 20 days and create mini Project,My Projecy Name is "My Question Bank".In this Project used in HTML5,CSS3,BOOTSTRAP5,JAVASCRIPT and JQUERY.In the Final Semester i did 3 month Internship in Concept Education System and work on HTML5 AAND CSS3 their and free time in created Webpage Templaate Create.                         </div>
                    </div>
                </div>
            </div>

            {/* enable dark mode button */}
            {/* <div className="container my-3">
                <button type="button" className="btn btn-primary mx-1" onClick={clicktoblackmode}>{btntext}</button>
            </div> */}

        </div>
    )
}
