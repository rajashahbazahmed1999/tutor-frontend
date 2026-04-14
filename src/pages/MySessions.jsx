import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function Session() {
  const { tutId } = useParams();
  const navigate = useNavigate();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();

    if (!date || !time) {
      alert("Please select date and time");
      return;
    }

    alert("Session booked successfully!");

    // 👉 later: send to backend

    navigate("/my-sessions");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">

        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-center">
          Book Session
        </h2>

        {/* Tutor Info */}
        <div className="bg-gray-100 p-4 rounded-lg mb-4 text-center">
          <p className="font-semibold">Tutor ID: {tutId}</p>
          <p className="text-sm text-gray-600">Expert Tutor Available</p>
        </div>

        {/* Form */}
        <form onSubmit={handleBooking} className="space-y-4">

          {/* Date */}
          <div>
            <label className="text-sm text-gray-600">Select Date</label>
            <input
              type="date"
              className="w-full p-3 border rounded-lg"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Time */}
          <div>
            <label className="text-sm text-gray-600">Select Time</label>
            <input
              type="time"
              className="w-full p-3 border rounded-lg"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm text-gray-600">Additional Notes</label>
            <textarea
              rows="3"
              placeholder="Any specific topic..."
              className="w-full p-3 border rounded-lg"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}

export default Session;