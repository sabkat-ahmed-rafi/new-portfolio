'use client'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';



const EmailBox = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(name == "" && email == "" && message == "") {
            return toast.error("Write something to send something 😁")
        }
        
        emailjs
          .sendForm(process.env.NEXT_PUBLIC_YOUR_SERVICE_ID ?? "", process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID ?? "", form.current ?? "", {
            publicKey: process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              toast.success('Message sent successfully 😀');
              setName("");
              setEmail("");
              setMessage("");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <>
       <section className='pb-[100px]'>
       <div className="grid max-w-screen-xl items-center grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 shadow-lg shadow-slate-300 ">
	<div className="flex flex-col justify-between items-left">
		<div className="space-y-2 lg:pl-14">
			<h2 className="text-4xl font-extrabold font-lilita leading-tight lg:text-5xl">Let's talk!</h2>
			<div className="dark:text-gray-600">Connect with me through a message.</div>
		</div>

	</div>
	<form ref={form} onSubmit={sendEmail} className="space-y-6">
		<div>
			<label htmlFor="name" className="text-sm font-semibold">Full name</label>
			<input onChange={(e) => setName(e.target.value)}  type="text" name='user_name' placeholder="" value={name} className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="email" className="text-sm font-semibold">Email</label>
			<input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name='user_email' className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300" />
		</div>
		<div>
			<label htmlFor="message" className="text-sm font-semibold">Message</label>
			<textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' rows={3} className="w-full p-3 rounded dark:bg-gray-100 border border-slate-300"></textarea>
		</div>
		<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:text-gray-50 border border-slate-300 bg-slate-950 text-white">Send Message</button>
	</form>
        </div>  
       </section>
       <Toaster   
       position="bottom-right"
       reverseOrder={true} />
    </>
  )
}

export default EmailBox