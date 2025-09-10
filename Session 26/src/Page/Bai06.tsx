import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginb6 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const user = {
    email: "admin@gmail.com",
    password: "123456",
    role: "Admin"
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === user.email && password === user.password && role === user.role) {
      navigate("/account6");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Nhập email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />

        <input
          type="password"
          placeholder="Nhập mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">-- Chọn quyền --</option>
          <option value="Admin">Admin</option>
          <option value="User">User</option>
        </select><br />

        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
};

export default Loginb6;
