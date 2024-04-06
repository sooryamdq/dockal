import QRCode from "qrcode.react";
import DeleteIcon from "../assets/DeleteIcon";
import Paragraph from "./Paragraph";
import { Link } from "react-router-dom";
import Menubar from "../assets/Menubar";

const DublicateCertificates = ({ editOpen, handleMenu }) => {
  return (
    <div className=" flex justify-center items-center my-4 lg:mt-0 mt-14">
      <div className="w-10/12 h-[590px] bg-primary rounded-lg flex justify-center items-center relative">
        <div className="bg-white w-[90%] h-[519px] bg-white p-3 relative">
          <Link className="flex md:flex-row flex-col items-center justify-between">
            <div className="bg-[#D9D9D9] w-20 h-20 rounded-full flex justify-center items-center">
              <Paragraph
                text="Upload your logo here"
                className="font-normal text-[10px] text-center"
              />
            </div>
            <Link className="font-medium lg:text-3xl text-base text-center text-[#2F2F2F]">
              Enter Your College Name Here
            </Link>
            <div></div>
          </Link>
          <div className="absolute lg:right-2 lg:top-2 bottom-10">
            <QRCode value="https://example.com" size={50} />
          </div>
          <div className="text-center ">
            <p className="lg:text-4xl text-base  font-normal text-[#2F2F2F] ">
              CERTIFICATE
              <span className="md:block inline font-normal text-sm">
                OF PARTICIPATION
              </span>
            </p>
            <div>
              <Paragraph
                text="This is to certify that"
                className="text-base text-center font-normal text-[#2F2F2F] py-1"
              />
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-3 py-1">
            <Paragraph
              text="Enter the student name"
              className="text-[#5D5D5D] font-medium text-sm"
            />

            <p className="border border-dashed border-2 lg:w-[685px] w-full"></p>
          </div>
          <div className="flex justify-between iteems-center py-4 px-5">
            <span className="self-start self-baseline text-base font-normal text-[#5D5D5D]">
              of
            </span>
            <Paragraph
              text="Enter College Name"
              className="text-[#5D5D5D] font-medium text-sm"
            />

            <div></div>
          </div>

          <div className="text-center flex flex-col items-center gap-3 ">
            <p className="border border-dashed border-2 lg:w-[804px]  w-full"></p>
          </div>
          <div className="text-center py-4 lg:text-base text-xs">
            <p>
              project completion themed under SDG in the category of College at{" "}
              <Link className="font-medium text-sm text-[#5D5D5D] px-2">
                Enter event name
              </Link>{" "}
              on{" "}
              <Link className="font-medium text-sm text-[#5D5D5D]">
                Enter the Date
              </Link>{" "}
              organiced by MVCE College of Engineering, Pondicherry.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <div></div>
            <div>
              <Link className="font-medium lg:text-sm text-xs">
                Upload signature
              </Link>
              <div>
                <p className="text-center py-1 font-semibold lg:text-sm text-xs">
                  Principal
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute lg:-right-20 lg:top-0 -top-9 -right-5">
          <div className="flex items-center justify-center gap-3">
            <div
              className="cursor-pointer relative modal"
              onClick={() => handleMenu()}
            >
              <Menubar />
              {editOpen && (
                <div className="flex flex-col gap-3 w-36 h-36 text-center pt-4 absolute right-5 bg-white rounded-md">
                  <Paragraph
                    text=" Add to group"
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white block"
                  />

                  <Paragraph
                    text="Templates"
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white"
                  />

                  <Paragraph
                    text="Saved"
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white"
                  />

                  <Paragraph
                    text="Groups"
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white"
                  />
                </div>
              )}
            </div>
            <div className="cursor-pointer">
              <DeleteIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DublicateCertificates;
