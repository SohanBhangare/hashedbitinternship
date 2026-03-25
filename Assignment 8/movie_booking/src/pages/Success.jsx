import { useLocation } from "react-router-dom";

function Success() {
  const { state } = useLocation();
  const bookingId = Math.floor(Math.random() * 100000);

  return (
    <div className="container">
      <div className="success">
        <h2>Booking Successful</h2>

        <p>Booking ID: {bookingId}</p>
        <p>Movie ID: {state?.movieId}</p>

        <p>Name: {state?.name}</p>
        <p>Email: {state?.email}</p>
        <p>Mobile: {state?.mobile}</p>

        <p>Row: {state?.row}</p>
        <p>Seats: {state?.seats}</p>
      </div>
    </div>
  );
}

export default Success;