import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const isAuthenticated = () => {
  let flag = false;
  localStorage.getItem("token") ? (flag = true) : (flag = false);

  return flag;
};

function RouteGuard(props) {
  const { Component } = props;

  const navigate = useNavigate();

  useEffect(() => {
    let login = isAuthenticated();

    if (!login) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Component />
    </div>
  );
}

export default RouteGuard;
