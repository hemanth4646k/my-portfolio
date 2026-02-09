import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { useState } from 'react';

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    
    // Instructions for User:
    // 1. Create an account at https://www.emailjs.com/
    // 2. Add Email Service (e.g., Gmail) -> Get Service ID
    // 3. Create Email Template -> Get Template ID
    //    (Make sure template variables match: {{name}}, {{email}}, {{message}})
    // 4. Get Public Key from Account > API Keys
    // 5. Replace these placeholders or use environment variables
    
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          to_name: "Hemanth",
          from_email: data.email,
          message: data.message,
        },
        publicKey
      );
      
      alert("Message sent successfully!");
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-transparent text-white pointer-events-auto">
      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-teal-400 to-blue-500">
          Contact Me
        </h2>
        
        <div className="relative max-w-xl mx-auto">
          {/* Decorative blurred background */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl blur-xl -z-10" />
          
          <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-6 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-medium text-cyan-100 mb-2">Name</label>
                <input 
                  {...register("name", { required: true })} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  placeholder="John Doe"
                />
                {errors.name && <span className="text-red-400 text-xs mt-1 block">Your name is required</span>}
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-cyan-100 mb-2">Email</label>
                <input 
                  {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                  placeholder="john@example.com"
                />
                {errors.email && <span className="text-red-400 text-xs mt-1 block">Valid email is required</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-cyan-100 mb-2">Message</label>
              <textarea 
                {...register("message", { required: true })} 
                rows="3"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan-400 focus:bg-white/10 transition-all duration-300 resize-none backdrop-blur-sm"
                placeholder="What's on your mind?"
              ></textarea>
              {errors.message && <span className="text-red-400 text-xs mt-1 block">A message is required</span>}
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              <span className="relative z-10 flex items-center gap-2">
                {loading ? 'Sending...' : 'Send Message'}
                {!loading && (
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
