import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";

const Tutors = () => {
  const [search, setSearch] = useState("");
  const [tutors, setTutors] = useState([]);

 
  const [showPanel, setShowPanel] = useState(false);

  
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    rating: "",
    price: "",
    image: "",
  });

  const navigate = useNavigate();

  
  useEffect(() => {
    fetchTutors();
  }, []);

  const fetchTutors = async () => {
    try {
      const res = await API.get("/tutors");

      setTutors(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

 
  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setFormData({
      ...formData,
      image: imageUrl,
    });
  };

 
  const handleAddTutor = async (e) => {
    e.preventDefault();

    
    if (
      !formData.name ||
      !formData.subject ||
      !formData.rating ||
      !formData.price
    ) {
      alert("All fields are required");
      return;
    }

    try {

      await API.post("/tutors", formData);

      
      fetchTutors();

      
      setFormData({
        name: "",
        subject: "",
        rating: "",
        price: "",
        image: "",
      });

    
      setShowPanel(false);

      window.location.reload();

    } catch (err) {
      console.log(err);
      alert("Failed to add tutor");
    }
  };

 
  const handleDeleteTutor = async (id) => {
    try {

      await API.delete(`/tutors/${id}`);

     
      setTutors((prev) =>
        prev.filter((tutor) => tutor._id !== id)
      );

    } catch (err) {
      console.log(err);
      alert("Failed to delete tutor");
    }
  };

 
  const filteredTutors = tutors.filter((tutor) =>
    tutor.subject
      ?.toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6 relative">

      

      <h1 className="text-3xl font-bold mb-6 text-center">
        Find Your Tutor
      </h1>

    

      <div className="max-w-3xl mx-auto mb-8 flex gap-3">

        <input
          type="text"
          placeholder="Search by subject (e.g. Math)"
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setShowPanel(true)}
          className="bg-blue-500 text-white px-5 rounded-lg hover:bg-blue-600"
        >
          + Add Tutor
        </button>

      </div>

   

      <div className="grid md:grid-cols-3 gap-6">

        {filteredTutors.map((tutor) => (

          <div
            key={tutor._id}
            className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition relative"
          >

            
            <button
              onClick={() => handleDeleteTutor(tutor._id)}
              className="absolute top-3 right-3 bg-red-500 text-white w-7 h-7 rounded-full hover:bg-red-600"
            >
              ✕
            </button>

          
            <div className="flex items-center gap-3 mb-3">

              <img
                src={
                  tutor.image ||
                  "https://via.placeholder.com/100"
                }
                alt="tutor"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h2 className="font-semibold">
                  {tutor.name}
                </h2>

                <p className="text-sm text-gray-500">
                  {tutor.subject}
                </p>
              </div>

            </div>

          
            <p className="text-sm text-gray-600 mb-2">
              ⭐ {tutor.rating} Rating
            </p>

          
            <p className="font-bold mb-4">
              {tutor.price}
            </p>

        
            <button
              onClick={() => navigate(`/session/${tutor._id}`)}
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
            >
              Book Session
            </button>

          </div>

        ))}

      </div>

   

      <div
        className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-2xl p-6 transition-transform duration-300 z-50
        ${showPanel ? "translate-x-0" : "translate-x-full"}`}
      >

      
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Tutor
          </h2>

          <button
            onClick={() => setShowPanel(false)}
            className="text-2xl"
          >
            ✕
          </button>

        </div>

      
        <form
          onSubmit={handleAddTutor}
          className="space-y-4"
        >

          
          <input
            type="text"
            name="name"
            placeholder="Tutor Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

          
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

         
          <input
            type="number"
            step="0.1"
            name="rating"
            placeholder="Rating"
            value={formData.rating}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

     
          <input
            type="text"
            name="price"
            placeholder="$10/hr"
            value={formData.price}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg"
          />

      
          <div>

            <label className="block mb-2 text-sm font-medium">
              Upload Profile Picture
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImage}
              className="w-full cursor-pointer hover:bg-gray-100 p-2 border rounded-lg"
            />

          </div>

        
          {formData.image && (
            <img
              src={formData.image}
              alt="preview"
              className="w-24 h-24 rounded-full object-cover mx-auto"
            />
          )}

         
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600"
          >
            Add Tutor
          </button>

        </form>

      </div>

      

      {showPanel && (
        <div
          onClick={() => setShowPanel(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

    </div>
  );
};

export default Tutors;