import { useParams } from "react-router-dom";

const Team = () => {
  const { teamId } = useParams();

  return (
    <div>
      <h3>Chi tiết Team {teamId}</h3>
      <p>Đây là thông tin về Team có ID: {teamId}</p>
    </div>
  );
};
export default Team;
