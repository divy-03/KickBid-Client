import { useGetUserProfileQuery } from "../apis/UserApi";
import Loader from "../components/Loader";

const UserProfile = () => {
  const { data, isLoading } = useGetUserProfileQuery({});
  if (isLoading) return <Loader />;

  console.log(data);
  return <div>Profile</div>;
};

export default UserProfile;
