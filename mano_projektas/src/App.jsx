import { Link, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import styled from "styled-components";

const Navigation = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const App = () => {
  return (
    <>
      <Navigation>
        <Link to="/">Prisijungti</Link>
        <Link to="/register-formik">Registruotis</Link>
      </Navigation>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register-formik" element={<RegisterForm />} />
      </Routes>
    </>
  );
};

export default App;