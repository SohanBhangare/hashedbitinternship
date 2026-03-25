import { useParams, useNavigate } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Movie Details - {id}</h2>

      <button onClick={() => navigate("/book", { state: { movieId: id } })}>
        Book Seat
      </button>
    </div>
  );
}

export default MovieDetails;