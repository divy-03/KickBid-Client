import { ChangeEvent, FormEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useRegisterUserMutation } from "../apis/UserApi";
import Loader from "../components/Loader";

interface User {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  //   const navigate = useNavigate();
  const [user, setuser] = useState<User>({ name: "", email: "", password: "" });

  const dataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const registerSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await registerUser(user);
    console.log(result);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="loginCont">
      <div>
        <form onSubmit={registerSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={dataChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={dataChange}
          />
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={dataChange}
            placeholder="Password"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
