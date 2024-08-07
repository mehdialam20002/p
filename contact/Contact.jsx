import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contact = () => {
    const form=useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_yw40n5l','template_8dcr67q', form.current,'pIWjxYq9CMGVlQqDB')
        .then((result)=>{
            console.log(result.text);
            alert("Message sent Successfully")

        },(error)=>{
            console.log(error.text);
        });
    }
  return (
    
    <section className="contact section" id='contact'>
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>
        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>
<div className="contact_info">
    <div className="contact_card">
        <i className="bx bx-mail-send contact_card-icon"></i>
        <h3 className="contact_card-title">Email</h3>
        <span className="contact_card-data">mehdialam2002@gmail.com</span>

        <a href="mailto:mehdialam2002@gmail.com.com" className='contact_button'>Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
    </div>
    <div className="contact_card">
        <i className="bx bxl-whatsapp contact_card-icon"></i>
        <h3 className="contact_card-title">Whatsapp</h3>
        <span className="contact_card-data">7761921786</span>

        <a href="https://api.whatsapp.com/send?phone=7761921786&text=Hello,more information!" className='contact_button'>Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
    </div>
    <div className="contact_card">
        <i className="bx bxl-messenger contact_card-icon"></i>
        <h3 className="contact_card-title">Messenger</h3>
        <span className="contact_card-data">fb.mehdi</span>

        <a href="https://m.me/crypticalcoder" className='contact_button'>Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
    </div>
</div>
            </div>
            <div className="contact_content">
                <h3 className="contact_title">Write me yout project</h3>





<form ref={form} onSubmit={sendEmail} className="contact_form">
<div className="contact_form-div">
    <label htmlFor="" className="contact_form-tag">Name</label>
    <input type="text" name='from_name'
    placeholder='your Name' className="contact_form-input" />
</div>

<div className="contact_form-div">
    <label htmlFor="" className="contact_form-tag">Mail</label>
    <input type="email" name='from_email'
    placeholder='your email' className="contact_form-input" />
</div>

<div className="contact_form-area contact_form-div">
    <label htmlFor="" className="contact_form-tag">Message</label>
    <textarea type="text" name='message' cols="30" rows="10"
    placeholder='Write your Project' className="contact_form-input" />
</div>

<button type='submit'   className="button button--flex" >Send Message</button>


            </form>








            </div>
        </div>
    </section>
  )
}

export default Contact