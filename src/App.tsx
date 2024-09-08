import { useHelloQuery } from "./apis/UserApi";
import "./styles/app.scss";

const App = () => {
  const { data, isLoading } = useHelloQuery({});
  if (isLoading) return <div>Loading....</div>;
  console.log(data);

  return <div>{data.hello}</div>;
};

export default App;
