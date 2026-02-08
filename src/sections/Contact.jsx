import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="w-full py-20 bg-transparent text-white pointer-events-auto">
      <div className="max-w-4xl mx-auto px-5 sm:px-10">
        <h2 className="text-4xl font-bold mb-10 text-center">Contact Me</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white/5 p-8 rounded-2xl border border-white/10">
          <div>
            <label className="block text-sm font-medium mb-2">Name</label>
            <input 
              {...register("name", { required: true })} 
              className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="Your Name"
            />
            {errors.name && <span className="text-red-500 text-sm">Name is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input 
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
              className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="your@email.com"
            />
            {errors.email && <span className="text-red-500 text-sm">Valid email is required</span>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea 
              {...register("message", { required: true })} 
              rows="5"
              className="w-full p-3 bg-black/50 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
            {errors.message && <span className="text-red-500 text-sm">Message is required</span>}
          </div>

          <button type="submit" className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-gray-200 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
