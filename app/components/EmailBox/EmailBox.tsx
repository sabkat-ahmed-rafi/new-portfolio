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
    <section className='min-h-screen bg-black text-[#F7939D] flex justify-center items-center'>
      
      <div className="grid max-w-screen-xl items-center grid-cols-1 md:grid-cols-2 gap-4 md:gap-x-28 px-8 py-8 md:py-16 mx-auto md:px-12 lg:px-16 xl:px-32 xl:shadow-xl border rounded-2xl">

	      <div className="flex flex-col justify-between items-left">
		      <div className="space-y-2 lg:pl-14">
			      <h2 className="text-4xl font-extrabold font-lilita leading-tight lg:text-5xl">
              Let&apos;s talk!      
            </h2>
			      <div>Connect with me through a message.</div>
		      </div>
	      </div>

	      <form ref={form} onSubmit={sendEmail} className="space-y-3 md:space-y-6 ">
		      <div>
			      <label htmlFor="name" className="text-sm font-semibold">Full name</label>
			      <input onChange={(e) => setName(e.target.value)}  type="text" name='user_name' placeholder="" value={name} className="w-full xl:h-[70px] p-3 rounded border border-[#F7939D] text-black" />
		      </div>
		      <div>
			      <label htmlFor="email" className="text-sm font-semibold">Email</label>
			      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name='user_email' className="w-full p-3 rounded dark:bg-gray-100 border border-[#F7939D] text-black" />
		      </div>
		      <div>
			      <label htmlFor="message" className="text-sm font-semibold">Message</label>
			      <textarea onChange={(e) => setMessage(e.target.value)} value={message} name='message' rows={3} className="w-full p-3 rounded dark:bg-gray-100 border border-[#F7939D] text-black"></textarea>
		      </div>
		      <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:text-gray-50 border border-slate-300 bg-[#F7939D] text-black hover:border hover:border-slate-950 hover:bg-white hover:text-slate-950 hover:tracking-[3px] transition-all">Send Message</button>
	      </form>

      </div>  

    </section>

    <Toaster   
      position="bottom-right"
      reverseOrder={true}
    />
    </>
  )
}

export default EmailBox