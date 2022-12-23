import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
  const { username } = useContext(AppContext);
  return <h1> This Is The Homepage For user {username} </h1>;
};
