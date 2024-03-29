import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import Menubar from "../assets/Menubar";
import DeleteIcon from "../assets/DeleteIcon";

const EditCertificates = ({
  editOpen,
  handleAddGroup,
  handleMenu,
  addgroup,
  handleGroupName,
  groupname,
  closeGroup,
}) => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-10/12 h-[590px] bg-primary rounded-lg flex justify-center items-center relative">
        <div className="bg-white w-[90%] h-[519px] bg-white p-3 relative">
          <Link className="flex md:flex-row flex-col items-center justify-between">
            <div className="bg-[#D9D9D9] w-20 h-20 rounded-full flex justify-center items-center relative ">
              <input
                type="file"
                className="font-normal  text-center absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <span className="absolute mt-8 inset-0 w-full text-[8px] h-full text-center text-black">
                Upload your logo here
              </span>
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
              <p className="text-base text-center font-normal text-[#2F2F2F] py-1">
                This is to certify that
              </p>
            </div>
          </div>
          <div className="text-center flex flex-col items-center gap-3 py-1">
            <input
              type="text"
              placeholder="Enter the student name"
              className="text-[#5D5D5D] font-medium text-sm border-none outline-none bg-transparent"
            />
            <p className="border border-dashed border-2 lg:w-[685px] w-full"></p>
          </div>
          <div className="flex justify-between iteems-center py-4 px-5">
            <span className="self-start self-baseline text-base font-normal text-[#5D5D5D]">
              of
            </span>
            <input
              type="text"
              placeholder="Enter College Name"
              className="text-[#5D5D5D] font-medium text-sm border-none outline-none bg-transparent"
            />

            <div></div>
          </div>

          <div className="text-center flex flex-col items-center gap-3 ">
            <p className="border border-dashed border-2 lg:w-[804px]  w-full"></p>
          </div>
          <div className="text-center py-4 lg:text-base text-xs">
            <p>
              project completion themed under SDG in the category of College at{" "}
              <input
                type="text"
                placeholder="Enter event name"
                className="text-[#5D5D5D] px-2 font-medium text-sm border-none outline-none bg-transparent"
              />
              on{" "}
              <input
                type="text"
                placeholder="Enter the Date"
                className="text-[#5D5D5D] px-2 font-medium text-sm border-none outline-none bg-transparent"
              />
              organiced by MVCE College of Engineering, Pondicherry.
            </p>
          </div>

          <div className="flex justify-between mt-10">
            <div></div>
            <div>
              <div>
                <p className=" py-1 font-semibold lg:text-sm text-xs">
                  Principal
                </p>
              </div>
              <div className="relative cursor-pointer w-full block">
                <input
                  type="file"
                  className="font-normal absolute inset-0 w-full h-full opacity-0"
                />
                <p className="absolute mt-4 -left-16 inset-0 w-full font-medium lg:text-sm text-xs h-full text-black text-center whitespace-nowrap">
                  Upload signature
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
                  <p
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white block"
                    onClick={() => handleAddGroup()}
                  >
                    Add to group
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    Templates
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    Saved
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    Groups
                  </p>
                </div>
              )}
              {addgroup && (
                <div className="flex flex-col gap-3 w-36 h-44 text-center pt-4 absolute right-5 bg-white rounded-md">
                  <div
                    className="flex justify-end items-center"
                    onClick={() => handleGroupName()}
                  >
                    <PlusIcon width="20" height="20" />
                  </div>
                  <p
                    className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white block"
                    onClick={() => handleAddGroup()}
                  >
                    Degree Certificates
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    Diploma Certificates
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    Final course certify
                  </p>
                  <p className="text-[#2F2F2F] font-normal text-xs border-b-1 border-[#2F2F2F] w-full bg-white">
                    EEE course certify
                  </p>
                </div>
              )}
              {groupname && (
                <div className="flex flex-col items-center justify-center gap-3 w-36 h-44 text-center pt-4 absolute right-4 bg-white rounded-md">
                  <div>
                    <input
                      type="text"
                      className="border w-[80%] text-xs px-2 py-1"
                      placeholder="Enter group Name"
                    />
                    <div className="flex justify-center items-center gap-2 mt-10">
                      <button
                        className="bg-primary p-2 text-white rounded-md text-xs"
                        onClick={() => closeGroup()}
                      >
                        Cancel
                      </button>
                      <Link
                        className="bg-primary p-2 text-white rounded-md text-xs"
                        onClick={() => closeGroup()}
                      >
                        Add
                      </Link>
                    </div>
                  </div>
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

export default EditCertificates;
