import React from "react";
import '../contact.css'
import linkedin from '../assets/linkedin.png'
import whatsapp from '../assets/whatsapp.png'
import ig from '../assets/ig.png'
import threads from '../assets/threads.png'
import facebook from '../assets/facebook.png'
import x from '../assets/x.png'
const Contact = () =>{
    return(
        <>
        
         <h1>Contact us</h1>

         <div className="contact-info  ">
            <h3>call:</h3> <p>08101133428</p>
            <h3>email:</h3><p>kosiokechukwu9@gmail.com</p>
         </div>
        <div className="socials">
           <h3>social media handles</h3>
            <span><a href='https://www.instagram.com/kohsea_the_digitaldev?igsh=MWpidDlhYXIwZjBqeg=='><img src={ig}/></a></span>
            <span><a href='https://www.facebook.com/share/16Rp3ZQB5v/'><img src={facebook}/></a></span>
            <span><a href='https://wa.me/2348101133428?text=Hello%20I%20want%20to%20learn%20more%20about%20your%20digital%20courses'><img src={whatsapp}/></a></span>
            <span><a href='https://x.com/Divine06263650?t=CD5Z5X4AeH7v7ZWGD6BlzA&s=09'><img src={x}/></a></span>
            <span><a href='https://www.threads.com/@kohsea_the_digitaldev'><img src={threads}/></a></span>
            <span><a href="https://www.linkedin.com/in/kosisochukwu-okechukwu-450a0a290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android
_"><img src={linkedin}/></a></span>
        </div>
        </>
    )
}

export default Contact;
