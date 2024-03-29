import React from 'react';
import DocumentIcon from '../assets/DocumentIcon';

const CertificateList = () => {
  return (
 
      <div className="flex items-center gap-2 py-2 px-2">
        <DocumentIcon />
        <div>
          <p style={{ fontSize: "9px" }} className="font-medium">
            Participation Certificate.Pdf
          </p>
          <p style={{ fontSize: "8px" }} className="font-medium text-xs text-[#8F8F8F]">
            12 Jan 2024 23:12
          </p>
        </div>
      </div>
    
  
  );
};

export default CertificateList;
