import MarkSheetGroup from "./MarksheetGroup";

const TemplateMarkSheet = () => {
  return (
    <>
      <div className="flex flex-col items-start gap-5 py-4">
        <p className="font-semibold text-sm text-left">Templates</p>
      </div>

      <MarkSheetGroup />
    </>
  );
};

export default TemplateMarkSheet;
