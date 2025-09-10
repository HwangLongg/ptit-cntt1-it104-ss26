import { Outlet, Link } from "react-router-dom";

const Teams = () => {
  const teams = [
    { id: 1, name: "Team A" },
    { id: 2, name: "Team B" },
    { id: 3, name: "Team C" },
  ];

  return (
    <div>
      <h2>Teams Page</h2>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            <Link to={`/teams/${team.id}`}>{team.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Teams;
