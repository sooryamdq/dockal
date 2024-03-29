import { Link } from "react-router-dom";
import ExploreNavbar from "../Components/ExploreNavbar";
import TemplatesCertificates from "../Components/TemplatesCertificates";
import SavedCertificate from "../Components/SavedCertificate";
import RecentelySharedCertificate from "../Components/RecentlySharedCertificate";
import GroupsCertificate from "../Components/GroupsCertificate";

const Credentials = () => {
  return (
    <>
      <ExploreNavbar />
      <div className="bg-gradient-to-b from-white to-[#1CAAA3] h-auto w-full px-8 pb-4">
        {/* Certificates section */}
        <div className="flex flex-col lg:items-start items-center gap-5 pb-4">
          <p className="font-semibold text-sm py-2 ">
            Certificates /{" "}
            <Link to="/marksheets" className="font-normal text-sm">
              Marksheets
            </Link>
          </p>
        </div>
        {/*Template section */}
        <TemplatesCertificates />

        {/*Recentely Shared section*/}
        <RecentelySharedCertificate />

        {/* Saved section */}
        <SavedCertificate />

        {/* Groups section */}
        <GroupsCertificate />
      </div>
    </>
  );
};

export default Credentials;
