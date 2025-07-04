export default function BottomTabBar() {
  const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t bg-white z-10 shadow-sm">
      <div className="flex text-sm">
        {tabs.map((tab, index) => (
          <div
            key={tab}
            className={`px-4 py-2 cursor-pointer border-r min-w-[100px] text-center ${
              index === 0 ? "bg-green-100 font-medium" : "hover:bg-gray-100"
            }`}
          >
            {tab}
          </div>
        ))}
        <div className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-center min-w-[100px]">＋</div>
      </div>
    </div>
  );
}

