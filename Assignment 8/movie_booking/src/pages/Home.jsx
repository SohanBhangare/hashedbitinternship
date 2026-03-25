import { Link } from "react-router-dom";

const movies = [
  { id: 1, name: "Dhurandhar 2", img: "https://picsum.photos/200/300?1" },
  { id: 2, name: "KGF", img: "https://picsum.photos/200/300?2" },
  { id: 3, name: "Toxic", img: "https://picsum.photos/200/300?3" },
  { id: 4, name: "RRR", img: "https://picsum.photos/200/300?4" },
  { id: 5, name: "Pushpa", img: "https://picsum.photos/200/300?5" },
  { id: 6, name: "Jawan", img: "https://picsum.photos/200/300?6" },
  { id: 7, name: "Animal", img: "https://picsum.photos/200/300?7" },
  { id: 8, name: "Salaar", img: "https://picsum.photos/200/300?8" }
];

function Home() {
  return (
    <div className="container">
      <h2>Movies</h2>

      <div className="grid">
        {movies.map((m) => (
          <Link key={m.id} to={`/movie/${m.id}`}>
            <div className="card">
              <img src={m.img} />
              <p>{m.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;