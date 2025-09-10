import { useParams } from "react-router-dom";

const Student = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <div>
      <h2>Thông tin sinh viên</h2>
      <p>Tên sinh viên: {name}</p>
    </div>
  );
};

export default Student;
