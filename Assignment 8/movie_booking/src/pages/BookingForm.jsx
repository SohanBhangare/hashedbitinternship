import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BookingForm() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    row: "A",
    seats: 1,
  });

  const handleSubmit = () => {
    navigate("/success", {
      state: { ...form, movieId: state?.movieId },
    });
  };

  return (
    <div className="container">
      <h2>Book Seat</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <br />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <br />

      <input
        placeholder="Mobile"
        onChange={(e) => setForm({ ...form, mobile: e.target.value })}
      />
      <br />

      <label>Select Row:</label>
      <br />
      <select onChange={(e) => setForm({ ...form, row: e.target.value })}>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
      <br />

      <label>No. of Seats:</label>
      <br />
      <input
        type="number"
        min="1"
        max="10"
        defaultValue="1"
        onChange={(e) => setForm({ ...form, seats: e.target.value })}
      />
      <br />

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BookingForm;