import CertificateList from "./CertificateList";
import student from "../assets/student.png";
import DownArrow from "../assets/DownArrow";
import MobileIcon from "../assets/MobileIcon";
import MessageIcon from "../assets/MessageIcon";


const chats = [
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    {
      name: "Reena",
      message: "I received it",
      time: "11:12",
      icon: student,
      isMuted: false,
    },
    // Add more chat objects as needed
  ];


  const windowHeight = window.innerHeight;
  const topElementHeight = 0; // Adjust if there's a top element above the target div
  const balancedHeight = windowHeight - topElementHeight;

  // Set the inline styles for the target div
  const styles = {
    height: balancedHeight + 'px',
    overflowY: 'auto',
    borderBottom: 'none',
  };
 
const StudentInfo = ()=>{
    return(
        <div className="w-[30%] h-[60vh]  border flex flex-col" >
                <div className="flex flex-col py-1 items-center border">
                  <img src={student} alt="student" className="w-20 h-20" />
                  <p className="text-sm font-medium">Mrunal</p>
                  <p className="text-xs font-medium text-[#7C7C7C]">Student</p>
                </div>
                <div className="border py-2">
                  <div className="flex justify-between px-2 py-1">
                    <p className="font-semibold text-[#7C7C7C] text-xs text-wrap">
                      INFORMATION
                    </p>
                    <p>
                      <DownArrow />
                    </p>
                  </div>
                  <div>
                    <div className="flex gap-1  items-center flex-wrap px-2 py-1">
                      <MobileIcon />
                      <p className="text-xs text-[#7C7C7C] text-wrap">
                        +91 9876543210
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-1 items-center px-2 py-1">
                      <MessageIcon />
                      <p className="text-xs text-[#7C7C7C] text-wrap">
                        Mrunal.cse@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full  overflow-y-auto  border-bottom-none" style={{scrollbarWidth:0}}>
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                  <CertificateList />
                </div>
              </div>
    )
}

export default StudentInfo