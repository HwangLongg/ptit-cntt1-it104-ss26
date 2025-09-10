import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const StudentSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const studentName = searchParams.get("studentName");

  const handleSearch = () => {
    if (inputValue.trim() !== "") {
      setSearchParams({ studentName: inputValue });
    }
  };

  return (
    <div>
      <h2>Tìm kiếm sinh viên</h2>
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleSearch}>Tìm kiếm</button>

      {studentName && (
        <p>
          Kết quả tìm kiếm: <strong>{studentName}</strong>
        </p>
      )}
    </div>
  );
};

export default StudentSearch;
