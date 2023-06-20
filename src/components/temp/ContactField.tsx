import { FormEvent,useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactField = () => {
    const form = useRef<HTMLFormElement>(null); 

    const sendEmail = (e:FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      emailjs.sendForm('default1', 'template_wpuri8h', e.currentTarget, 'R-PIU8JgrSoL-sOGO')
        .then((result) => {
            alert("Piyas Receive Your Response. Let check your email...!")
        }, (error) => {
            console.log(error.text);
        });
        e.currentTarget.reset()
    }
  return (
    <form ref={form} onSubmit={sendEmail}>
        <h1 className='title'>Contact with me</h1>
        <div>
            <input placeholder='Enter Your name' type="text" name="from_name" />
        </div>
        <div>
            <input placeholder='Enter your email' type="email" name="from_email" />
        </div>
        <div>
            <textarea  rows={4} placeholder='Enter your message' name="message" />
        </div>
        <div>
            <input className='button' type="submit" value="Send" />
        </div>
  </form>
  )
}
export default ContactField;