import { useState } from "react";

function Verify() {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Documents submitted for verification!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white p-8 rounded-xl shadow w-[400px]">

        <h2 className="text-xl font-bold mb-4">
          Tutor Verification
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="w-full"
          />

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg"
          >
            Submit for Verification
          </button>

        </form>

      </div>
    </div>
  );
}

export default Verify;