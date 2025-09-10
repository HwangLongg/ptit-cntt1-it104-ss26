import { useSearchParams } from "react-router-dom";

const StudentResult = () => {
  const [searchParams] = useSearchParams();
  const studentName = searchParams.get("studentName");

  return (
    <div>
      <h2>Kết quả tìm kiếm</h2>
      <p>
        {studentName ? (
          <strong>{studentName}</strong>
        ) : (
          "Không có dữ liệu sinh viên"
        )}
      </p>
    </div>
  );
};

export default StudentResult;
