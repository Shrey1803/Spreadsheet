import { Plus, Triangle } from "lucide-react";

export default function TabsHeader() {
  return (
    <div className="flex items-end px-4 pt-2 pb-1 bg-white border-b text-sm font-medium overflow-x-auto whitespace-nowrap">
      <div className="flex items-center bg-gray-100 text-gray-700 px-3 py-1.5 rounded-t-md border border-b-0 border-gray-300 mr-0.5 min-w-[260px]">
        <Triangle className="w-3 h-3 text-blue-500 mr-2" fill="currentColor" />
        Q3 Financial Overview
        <span className="text-red-400 text-xs ml-2 cursor-pointer">⚙</span>
      </div>
      <div className="flex flex-col items-center -mb-[1px]">
        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-t-md border border-b-0 border-green-300 min-w-[100px] text-center text-xs">
          <Triangle className="w-2 h-2 inline mr-1" fill="currentColor" /> ABC
        </div>
      </div>
      <div className="flex flex-col items-center -mb-[1px]">
        <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-t-md border border-b-0 border-purple-300 min-w-[160px] text-center text-xs">
          <Triangle className="w-2 h-2 inline mr-1" fill="currentColor" /> Answer a question
        </div>
      </div>
      <div className="flex flex-col items-center -mb-[1px]">
        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-t-md border border-b-0 border-orange-300 min-w-[100px] text-center text-xs">
          <Triangle className="w-2 h-2 inline mr-1" fill="currentColor" /> Extract
        </div>
      </div>
      <div className="flex flex-col items-center -mb-[1px]">
        <div className="bg-gray-100 text-gray-600 px-2 py-1.5 rounded-t-md border border-b-0 border-gray-300 cursor-pointer">
          <Plus size={16} />
        </div>
      </div>
    </div>
  );
}
