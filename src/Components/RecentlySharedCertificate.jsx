import CertificateGroup from "./CertificateGroup"


const RecentelySharedCertificate = ()=>{
    return(
        <>
      <div className="flex flex-col lg:items-start items-center gap-5 py-4">
      <p className="font-semibold text-sm text-left">Recently shared</p>
    </div>
    <CertificateGroup/>
      </>
    )
}

export default RecentelySharedCertificate