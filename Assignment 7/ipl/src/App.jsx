import { useEffect, useState } from "react";

function App() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("https://my-json-server.typicode.com/FreSauce/json-ipl/data")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // helpful for debugging

        // Safe sort (ascending by NRR)
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setTeams(sortedData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>IPL 2022 Points Table</h2>

      <table border="1">
        <thead>
          <tr>
            <th>No</th>
            <th>Team</th>
            <th>Matches</th>
            <th>Won</th>
            <th>Lost</th>
            <th>Tied</th>
            <th>NRR</th>
            <th>Points</th>
          </tr>
        </thead>

        <tbody>
          {teams.map((team, index) => (
            <tr key={index}>
              <td>{index + 1}</td>

              {/* Handle both API formats */}
              <td>{team.Team || team.team}</td>

              <td>{team.Matches || team.played}</td>
              <td>{team.Won || team.wins}</td>
              <td>{team.Lost || team.losses}</td>
              <td>{team.Tied || team.ties || 0}</td>
              <td>{team.NRR}</td>
              <td>{team.Points || team.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;