import { useParams } from "react-router-dom";

function Session() {
  const { tutId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-[400px]">

        <h2 className="text-xl font-bold mb-4">
          Book Session with Tutor #{tutId}
        </h2>

        <form className="space-y-4">

          <input
            type="date"
            className="w-full p-3 border rounded-lg"
          />

          <input
            type="time"
            className="w-full p-3 border rounded-lg"
          />

          <button className="w-full bg-blue-500 text-white py-3 rounded-lg">
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}

export default Session;