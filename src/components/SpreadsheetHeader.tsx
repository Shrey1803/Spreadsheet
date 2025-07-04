import TopHeader from "./TopHeader";
import SpreadsheetToolbar from "./SpreadsheetToolbar";

export default function SpreadsheetHeader() {
  return (
    <div className="sticky top-0 z-10">
      <TopHeader />
      <SpreadsheetToolbar />
    </div>
  );
}

