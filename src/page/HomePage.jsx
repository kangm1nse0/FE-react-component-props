import UserProfile from "../components/UserProfile/UserProfile";

const HomePage = () => {
  return (
    <div>
      <UserProfile name="강민서" age={22} major="컴퓨터공학과"/>
    </div>
  );
};

export default HomePage;
