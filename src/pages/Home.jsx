import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-600 text-white">

      <nav className="flex justify-between items-center px-10 py-4">
        <h1 className="text-2xl font-bold">TutorHub</h1>

        <div className="flex gap-4">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-white text-blue-600 font-medium hover:bg-gray-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg border border-white hover:bg-white hover:text-blue-600 transition"
          >
            Signup
          </Link>
        </div>
      </nav>

      
      <div className="flex flex-col items-center justify-center text-center mt-20 px-6">

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Learn Anytime, Anywhere
        </h2>

        <p className="mt-4 text-lg max-w-xl text-gray-100">
          Connect with expert tutors, book sessions, and improve your skills
          from the comfort of your home.
        </p>

        
        <div className="mt-6 flex gap-4">
          <Link
            to="/signup"
            className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100"
          >
            Get Started
          </Link>

          <Link
            to="/tutors"
            className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-blue-600 transition"
          >
            Find Tutors
          </Link>
        </div>
      </div>

     
      <div className="mt-20 px-10 grid md:grid-cols-3 gap-6 text-center">

        <div className="bg-white text-gray-700 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Expert Tutors</h3>
          <p className="text-sm mt-2">
            Learn from highly qualified and experienced tutors.
          </p>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Flexible Sessions</h3>
          <p className="text-sm mt-2">
            Book sessions anytime that fits your schedule.
          </p>
        </div>

        <div className="bg-white text-gray-700 p-6 rounded-xl shadow">
          <h3 className="font-bold text-lg">Secure Platform</h3>
          <p className="text-sm mt-2">
            Safe and reliable learning environment.
          </p>
        </div>

      </div>

    
      <div className="text-center mt-20 pb-6 text-sm text-gray-200">
        © 2026 TutorHub. All rights reserved.
      </div>
    </div>
  );
}

export default Home;