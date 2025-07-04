// App.tsx

import SpreadsheetHeader from './components/SpreadsheetHeader';
import SpreadsheetTabs from './components/SpreadsheetTabs';
import SpreadsheetTable from './components/SpreadsheetTable';
import BottomTabBar from './components/BottomTabBar';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SpreadsheetHeader />
      <SpreadsheetTabs />
      <main className="flex-1 px-6 py-4 overflow-auto">
        <SpreadsheetTable />
      </main>
      <BottomTabBar />
    </div>
  );
}
