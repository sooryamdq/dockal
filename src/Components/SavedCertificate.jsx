import CertificateGroup from "./CertificateGroup"


const SavedCertificate = ()=>{
    return(
        <>
<div className="flex flex-col lg:items-start items-center gap-5 py-4">
        <p className="font-semibold text-sm text-left">Saved</p>
      </div>
      <CertificateGroup/>
      </>
    )
}

export default SavedCertificate