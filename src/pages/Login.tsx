import { ChangeEvent, FormEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { useLoginUserMutation, useRegisterUserMutation } from "../apis/UserApi";
import Loader from "../components/Loader";

interface User {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  //   const navigate = useNavigate();
  const [user, setuser] = useState<User>({ name: "", email: "", password: "" });
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loginUser, { isLoading: ll }] = useLoginUserMutation();
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await loginUser({ email, password });
    console.log(result);
  };

  const dataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  const [registerUser, { isLoading: rl }] = useRegisterUserMutation();
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await registerUser(user);
    console.log(result);
  };

  if (ll || rl) return <Loader />;

  return (
    <div className="loginCont">
      <div>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <form onSubmit={handleRegister}>
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
            placeholder="Password"
            value={user.password}
            onChange={dataChange}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
