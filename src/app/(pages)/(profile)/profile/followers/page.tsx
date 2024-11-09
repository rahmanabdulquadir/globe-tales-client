import MyFollowers from "@/components/feed/MyFollowers";
import { ScrollArea } from "@/components/ui/scroll-area";


const page = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-gradient-to-br from-white to-gray-100 rounded-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-black to-zinc-800 text-white">
        <h2 className="text-lg font-bold">Your Followers</h2>
        <p className="text-sm text-indigo-100">Stay connected with people who follow you.</p>
      </div>

      <div className="p-4 border-b border-gray-200">
        {/* <div className="relative">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
          <Input
            type="text"
            placeholder="Search followers"
            className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div> */}
      </div>

      <ScrollArea className="h-[300px] px-4 py-3 bg-white">
        <MyFollowers heading={false} />
      </ScrollArea>

      <div className="p-4 bg-gray-50 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-500">Showing all followers</p>
      </div>
    </div>
  );
};

export default page;
