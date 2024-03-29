import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarController,
  BarElement,
  Tooltip,
  Legend
);

const calculateOpacity = (percentage) => {
  return percentage / 100;
};

const getBarWidth = () => {
  // Determine bar width based on screen size
  if (window.innerWidth < 768) {
    return 5; // For small screens
  } else if (window.innerWidth < 1024) {
    return 20; // For medium screens
  } else {
    return 30; // For large screens
  }
};

const datas = [90, 80, 50, 10];
const backgroundColorsDoughnut = datas.map((percentage) => {
  const opacity = calculateOpacity(percentage);
  return `rgba(10, 143, 140, ${opacity})`;
});

const ApprovalStatus = [60, 20, 20];
const bgColorsDoughnut = ApprovalStatus.map((percentage) => {
  const opacity = calculateOpacity(percentage);
  return `rgba(10, 143, 140, ${opacity})`;
});

const BarChartel = [60, 80, 20, 30];
const bgColors = BarChartel.map((percentage) => {
  const opacity = calculateOpacity(percentage);
  return `rgba(10, 143, 140, ${opacity})`;
});

export const Certificate = {
  labels: ["Degree", "Diploma", "Achievement", "Participation"],
  datasets: [
    {
      label: "# of Votes",
      data: [40, 30, 20, 10],
      backgroundColor: backgroundColorsDoughnut,
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

export const BarChartdata = {
  labels: ["Jan", "Feb", "March", "April", "May", "Jun"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: bgColors,
      borderWidth: 1,
      tension: 0.2,
    },
  ],
};

export const Approvalstatusdata = {
  labels: ["Pending", "Rejected", "Approved"],
  datasets: [
    {
      label: "# of Votes",
      data: [60, 20, 20],
      backgroundColor: bgColorsDoughnut,
      borderWidth: 1,
     
      tension: 0.2,
    },
  ],
};

const options = {
  indexAxis: "y",
  maintainAspectRatio: false, 
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
    },
  },
};

const optionsX = {
  indexAxis: "x",
  maintainAspectRatio: false, 
  scales: {
    x: {
      grid: {
        display: false, // Hide x-axis grid lines
      },
    },
    y: {
      grid: {
        display: false, // Hide y-axis grid lines
      },
    },
  },
};


options.scales.x.barThickness = getBarWidth(); // Set bar thickness dynamically


export function CertificateChart() {
  return <Doughnut data={Certificate} />;
}

export function Approvalstatus() {
  return <Doughnut data={Approvalstatusdata}  />;
}
export function BarChart() {
  return (
    <div className=" h-full ">
      <Bar data={BarChartdata} options={options}  />
    </div>
  );
}
export function BarChartX() {
  return (
    <div className=" h-full ">
      <Bar data={BarChartdata} options={optionsX}  />
    </div>
  );
}
