import { useState } from "react";
import CertificateImage from "../assets/CertificateImage";
import student from "../assets/student.png";
import MarkSheetImage from "../assets/Marksheet";

const StudentDetails = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="w-full px-20 py-4">
        <div className="flex items-center gap-4">
          <div className="rounded-full">
            <img src={student} alt="student" />
          </div>

          <div>
            <p className="font-medium text-sm">Riya</p>
            <p className="text-sm font-normal">
              Computer Science and Engineering
            </p>
            <p className="text-sm font-normal">2021-2025</p>
          </div>
        </div>
        <div className="flex gap-2 my-6 cursor-pointer">
          <p
            className={
              activeTab === "tab1"
                ? "active font-medium text-xs text-primary  border-primary border-b"
                : "font-medium text-xs text-black  border-black border-b"
            }
            onClick={() => handleTabChange("tab1")}
          >
            Certificates
          </p>
          <p
            className={
              activeTab === "tab2"
                ? "active font-medium text-xs text-primary border-primary border-b"
                : "font-medium text-xs text-black border-black border-b"
            }
            onClick={() => handleTabChange("tab2")}
          >
            Marksheets
          </p>
        </div>
        {activeTab === "tab1" && (
          <div className="flex flex-wrap gap-5 w-full h-auto md:justify-start justify-center">
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-60 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-64 h-44 border-2">
              <CertificateImage />
            </div>
            <div className="w-64 h-44 border-2">
              <CertificateImage />
            </div>
          </div>
        )}
        {activeTab === "tab2" && (
          <div className="flex gap-5 flex-wrap md:justify-start justify-center">
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
            <div className="w-36 h-52">
              <MarkSheetImage />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentDetails;
