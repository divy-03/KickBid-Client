import { useLogoutUserMutation } from "../apis/UserApi";
import Loader from "./Loader";

const Navbar = () => {
  const [logoutUser, { isLoading }] = useLogoutUserMutation();
  if (isLoading) return <Loader />;

  const handleLogout = async () => {
    const result = await logoutUser({});
    console.log(result);
  };
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Navbar;
