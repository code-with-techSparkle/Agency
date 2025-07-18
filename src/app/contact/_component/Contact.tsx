'use client';
import { motion } from 'framer-motion';

const ContactForm = () => {
  return (
    <div className="w-full min-h-screen px-6 md:px-16 py-24 bg-white text-black flex flex-col gap-16 items-center justify-center">
      <h1 className='text-9xl max-lg:text-7xl max-md:text-6xl max-sm:text-4xl font-bold text-center'>Contact Me </h1>
      <form
        className="w-full max-w-3xl space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name Surname"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="mail@company.com"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Timeline</label>
            <input
              type="text"
              name="timeline"
              placeholder="2 weeks"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
          <div>
            <label className="block text-xs font-bold mb-1 uppercase tracking-wide">Budget</label>
            <input
              type="text"
              name="budget"
              placeholder="$5.000, $10.000"
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold mb-1 uppercase tracking-wide">More Information</label>
          <textarea
            name="info"
            placeholder="Hello, I'm looking for a Agency to help me out with..."
            rows={5}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition resize-none"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full md:w-fit px-8 py-3 bg-black text-white rounded-full font-medium tracking-wide transition"
        >
          Submit Project
        </motion.button>
      </form>
    </div>
  );
};

export default ContactForm;
