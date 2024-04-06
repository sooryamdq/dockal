import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useEffect, useState } from "react";
import WelcomeUser from "../Components/WelcomeUser";
import ChartData from "../Components/ChartData";
import EventDetails from "../Components/EventDetails";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Retrieve userData from local storage
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  return (
    <>
      <WelcomeUser userData={userData} />
      <div className="flex flex-col lg:flex-row items-center justify-center mt-10 gap-5 ">
        <ChartData />
        <EventDetails />
      </div>
    </>
  );
};

export default DashboardPage;
