import React, { useContext } from "react";
import { UserContext } from "../contexts/AuthContext";
import Layout from "../layouts/MainLayout";

export default function Home() {
  const { globalState, setGlobalState } = useContext(UserContext);

  // Reading values from the global state
  const theme = globalState.theme;
  const user = globalState.user;
  const currentUserType = globalState.currentUserType;

  // Updating values in the global state
  const handleClick = () => {
    setGlobalState({
      ...globalState,
      theme: "dark",
    });
  };

  return (
    <Layout>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
}
