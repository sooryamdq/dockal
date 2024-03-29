import { Approvalstatus, BarChart, BarChartX, CertificateChart } from "./Chart";

const ChartData = () => {
  return (
    <>
    <div className="lg:block hidden">
    <div className=" lg:m-0 m-2  flex flex-col justify-center items-center ">
        <div className="bg-primary w-16 h-16 rounded-full flex justify-center items-center">
          <svg
            width="29"
            height="27"
            viewBox="0 0 29 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.0181 20.4147L0.90918 19.603L6.86097 10.0761L10.9329 14.8267L16.3092 6.10868L19.0944 10.3082C18.8356 10.3489 18.5958 10.3941 18.375 10.4439C18.1542 10.4937 17.9312 10.5566 17.7058 10.6326L16.3594 8.62377L11.1487 17.111L7.04285 12.3265L2.0181 20.4147ZM27.9223 26.9637L23.2627 22.357C22.8627 22.6565 22.4247 22.8854 21.9488 23.0438C21.4728 23.2021 20.9756 23.2813 20.4571 23.2813C19.126 23.2813 18.0013 22.8225 17.0828 21.905C16.1653 20.9866 15.7065 19.8618 15.7065 18.5307C15.7065 17.1997 16.1653 16.0749 17.0828 15.1565C18.0013 14.2389 19.126 13.7802 20.4571 13.7802C21.7882 13.7802 22.9129 14.2389 23.8314 15.1565C24.7489 16.0749 25.2077 17.1997 25.2077 18.5307C25.2077 19.0664 25.124 19.5768 24.9566 20.0618C24.7901 20.5459 24.5485 20.9911 24.2318 21.3974L28.89 25.9959L27.9223 26.9637ZM20.4571 21.924C21.4072 21.924 22.2103 21.596 22.8663 20.94C23.5224 20.2839 23.8504 19.4809 23.8504 18.5307C23.8504 17.5806 23.5224 16.7776 22.8663 16.1215C22.2103 15.4655 21.4072 15.1375 20.4571 15.1375C19.507 15.1375 18.7039 15.4655 18.0479 16.1215C17.3919 16.7776 17.0638 17.5806 17.0638 18.5307C17.0638 19.4809 17.3919 20.2839 18.0479 20.94C18.7039 21.596 19.507 21.924 20.4571 21.924ZM22.9545 10.5959C22.7338 10.519 22.5134 10.4548 22.2935 10.4032C22.0737 10.3507 21.8452 10.3132 21.6081 10.2905L27.8341 0.393066L28.943 1.20474L22.9545 10.5959Z"
              fill="white"
            />
          </svg>
        </div>

        <div
          className="lg:w-[740px] md:w-[500px] w-[95%]  lg:p-4 p-8 chartbanner  lg:mt-0 mt-4 "
          style={{ borderRadius: "40px" }}
        >
          <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-2 gap-5 ">
            <div
              className="lg:w-64 w-[100%] h-auto bg-white p-3 lg:mt-0 mt-10"
              style={{ borderRadius: "20px" }}
            >
              <p className="text-[#969696] font-semibold text-xs">
                Certificate /{" "}
                <span className="font-normal text-xs">
                  Marksheet Distribution
                </span>
              </p>
              <CertificateChart />
            </div>
            <div
              className="lg:w-64 w-[100%] h-auto bg-white p-3"
              style={{ borderRadius: "20px" }}
            >
              <p className="text-[#969696] font-semibold text-xs">
                Approval Status
              </p>
              <Approvalstatus />
            </div>
          </div>
          <div
            className="bg-white w-[100%] h-64 p-5 lg:my-1 my-2"
            style={{ borderRadius: "20px" }}
          >
            <p className="text-[#969696] font-normal text-xs">
              Credentials Issued Overview
            </p>
            <BarChart />
          </div>
        </div>
      </div>
    </div>
      

      {/*Mobile view */}
      <div className="flex flex-col justify-center items-center gap-5 block lg:hidden py-4">
        <p className="font-semibold text-xs self-start">
          Certificate /{" "}
          <span className="font-normal  text-xs">Marksheet Distribution</span>
        </p>

        <div className="w-full bg-white p-1">
          <CertificateChart />
        </div>

        <p className="font-semibold text-xs self-start">Approval Status</p>
        <div className="w-full bg-white p-1">
        <Approvalstatus />
        </div>
       

        <p className="font-normal text-xs self-start">Credentials Issued Overview</p>
        <div>
        <BarChartX/>
        </div>
       
      </div>
    </>
  );
};

export default ChartData;
