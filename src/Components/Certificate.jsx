import CertificateImage from "../assets/CertificateImage"
import EditIcon from "../assets/EditIcon"

const Certificate = ()=>{
    return(
        <div className="relative">
              <div className="lg:w-72 lg:h-48 w-36 h-24  mt-2 border">
                <CertificateImage />
              </div>
              <div className="absolute top-2 right-0 ">
                <EditIcon />
              </div>
            </div>
    )
}

export default Certificate