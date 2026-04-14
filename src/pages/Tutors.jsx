import { useState } from "react";
import { useNavigate } from "react-router-dom";

const tutorsData = [
  {
    id: 1,
    name: "Ali Khan",
    subject: "Math",
    rating: 4.8,
    price: "$10/hr",
  },
  {
    id: 2,
    name: "Sara Ahmed",
    subject: "Physics",
    rating: 4.6,
    price: "$12/hr",
  },
  {
    id: 3,
    name: "Usman Tariq",
    subject: "Computer Science",
    rating: 4.9,
    price: "$15/hr",
  },
];

const Tutors = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTutors = tutorsData.filter((tutor) =>
    tutor.subject.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">

    
      <h1 className="text-3xl font-bold mb-6 text-center">
        Find Your Tutor
      </h1>

      
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search by subject (e.g. Math)"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

    
      <div className="grid md:grid-cols-3 gap-6">
        {filteredTutors.map((tutor) => (
          <div
            key={tutor.id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3 mb-3">
              <img
                
                alt="tutor"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h2 className="font-semibold">{tutor.name}</h2>
                <p className="text-sm text-gray-500">{tutor.subject}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              ⭐ {tutor.rating} Rating
            </p>

            <p className="font-bold mb-4">{tutor.price}</p>

            <button
              onClick={() => navigate(`/session/${tutor.id}`)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Book Session
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Tutors;