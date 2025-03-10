import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center text-center px-6 py-12 md:px-20">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-black"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Connect Communities
      </motion.h1>
      <p className="text-gray-600 mt-3 text-lg md:text-xl">
        Bridging gaps between faiths with tech and a dash of fun!
      </p>

      {/* Hero Section */}
      <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-5xl">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-black">
            Unite, Innovate, <br /> Connect, Inspire
          </h2>
          <p className="text-gray-700">
            Join us to be part of a community where spirituality meets
            innovation. Together, we'll build a world that's more inclusive,
            engaging, and connected than ever before!
          </p>
          <Link
            to="/events"
            className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-lg text-lg font-semibold inline-block transition"
          >
            Explore Events
          </Link>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://media.istockphoto.com/id/2094337676/photo/diverse-team-working-together-in-modern-co-working-space.jpg?s=2048x2048&w=is&k=20&c=laH1UL7RxM9mqD9TSOYbAFbHBO3RokKTz3O1arUJ0_0="
            alt="Community"
            className="w-full max-w-md rounded-3xl shadow-lg h-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
