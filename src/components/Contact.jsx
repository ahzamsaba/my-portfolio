import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'

const Contact = () => {
  const form = useRef()
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)

    emailjs
      .sendForm(
        'service_rfpzg0h',//service id
        'template_om0vc24',//template id
        form.current,
        'ktUm-RkhJF4V_cShp'//public key
      )
      .then(
        (result) => {
          setLoading(false)
          setDone(true)
          toast.success("Message sent successfully ✅")
          form.current.reset()
        },
        (error) => {
          setLoading(false)
          toast.error('Something went wrong ❌')
          console.log(error.text);
        }
      );
  };

  return (
    // <section
    //   id='contact'
    //   className='py-20 bg-[#0f0e1a] text-white'
    // >
    //   <div className='max-w-3xl mx-auto px-6'>
    //     <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
    //       <span className='border-b-4 border-purple-500 pb-1'>Contact Me</span>
    //     </h2>
    //     <p className='text-center text-gray-300 mb-10'>
    //       Have a question or want to work together? Fill out the form below.
    //     </p>

    //     <form
    //       ref={form}
    //       onSubmit={sendEmail}
    //       className='space-y-6'
    //     >
    //       <div>
    //         <label className='block mb-2 text-sm font-medium'>Your Name</label>
    //         <input 
    //           type="text"
    //           name='user_name'
    //           required
    //           className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500' 
    //         />
    //       </div>
    //       <div>
    //         <label className='block mb-2 text-sm font-medium'>Your Email</label>
    //         <input 
    //           type="email"
    //           name='user_email'
    //           required
    //           className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500' 
    //         />
    //       </div>
    //       <div>
    //         <label className='block mb-2 text-sm font-medium'>Message</label>
    //         <textarea 
    //           name="message"
    //           rows="5"
    //           required
    //           className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500'
    //         ></textarea>
    //       </div>
    //       <button
    //         type='submit'
    //         disabled={loading}
    //         className='px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded transition'
    //       >
    //         {loading ? "Sending..." : "Send Message"}
    //       </button>
    //       {done && <p className='text-green-400 mt-4'>Message sent successfully!</p>}
    //     </form>
    //   </div>
    // </section>

    <section
      id='contact'
      className='py-20 bg-[#0f0e1a] text-white'
    >
      <div className='max-w-3xl mx-auto px-6'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-4'>
          <span className='border-b-4 border-purple-500 pb-1'>Contact Me</span>
        </h2>
        <p className='text-center text-gray-300 mb-10'>
          Have a question or want to work together? Fill out the form below.
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className='space-y-6'
        >
          <div>
            <label className='block mb-2 text-sm font-medium'>Your Name</label>
            <input 
              type="text"
              name='user_name'
              required
              className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500' 
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium'>Your Email</label>
            <input 
              type="email"
              name='user_email'
              required
              className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500' 
            />
          </div>
          <div>
            <label className='block mb-2 text-sm font-medium'>Message</label>
            <textarea 
              name="message"
              rows="5"
              required
              className='w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded focus:outline-none focus:border-purple-500'
            ></textarea>
          </div>
          <button
            type='submit'
            disabled={loading}
            className='px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded transition'
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact