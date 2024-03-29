
import CertificateImg from "./CertificateImage.png"


const CertificateImage = ()=>{
    return(
        <div className="w-full h-full">
        <img src={CertificateImg} alt="certificate" className="w-full h-full object-cover" style={{maxWidth:"100%",maxHeight:"100%"}} />
        </div>
    )
}
export default CertificateImage