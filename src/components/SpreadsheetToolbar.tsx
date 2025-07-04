import {
  EyeOff, ArrowUpDown, Filter, LayoutGrid, Upload, Import, Share2, PlusCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function SpreadsheetToolbar() {
  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white shadow-sm border-b text-sm text-gray-800">
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="sm">Tool bar</Button>
        <Button variant="ghost" size="sm"><EyeOff className="w-4 h-4 mr-1" />Hide fields</Button>
        <Button variant="ghost" size="sm"><ArrowUpDown className="w-4 h-4 mr-1" />Sort</Button>
        <Button variant="ghost" size="sm"><Filter className="w-4 h-4 mr-1" />Filter</Button>
        <Button variant="ghost" size="sm"><LayoutGrid className="w-4 h-4 mr-1" />Cell view</Button>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm"><Upload className="w-4 h-4 mr-1" />Import</Button>
        <Button variant="outline" size="sm"><Import className="w-4 h-4 mr-1" />Export</Button>
        <Button variant="outline" size="sm"><Share2 className="w-4 h-4 mr-1" />Share</Button>
        <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
          <PlusCircle className="w-4 h-4 mr-1" /> New Action
        </Button>
      </div>
    </div>
  );
}
