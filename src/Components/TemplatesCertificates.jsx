import CertificateGroup from "./CertificateGroup";

const TemplatesCertificates = () => {
  return (
    <>
      <div className="flex flex-col items-start  gap-5 py-4">
        <p className="font-semibold text-sm text-left">Templates</p>
      </div>

      <CertificateGroup />
    </>
  );
};

export default TemplatesCertificates;
