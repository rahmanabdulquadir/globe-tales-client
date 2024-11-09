"use client";
import PremiumAccess from "@/components/profile/PremiumAccess";
import Loader from "@/components/shared/Loader";
import { logout } from "@/redux/features/auth/auth.slice";
import { useAppSelector } from "@/redux/hook";
import { format } from "date-fns";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";

const Profile = () => {
  const { isLoading, user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout(undefined));
    Cookies.remove("refreshToken");
  };

  if (isLoading) {
    return <Loader className="!h-screen" />;
  }

  if (!user) {
    Cookies.set("redirect", "/profile");
    router.push("/");
    return <></>;
  }

  return (
    <div className="w-full max-w-3xl mx-auto mt-10 p-6 bg-gradient-to-br from-white to-gray-50 rounded-lg shadow-lg">
      {/* Profile Header */}
      <div className="flex items-start gap-6 mb-6">
        <Link
          href="/profile/settings"
          className="w-[120px] h-[120px] rounded-full overflow-hidden bg-gray-200 relative group/profile shadow-md"
        >
          <Image
            src={user.image || "/images/avatar.jpg"}
            width={120}
            height={120}
            alt="avatar"
            className="w-full h-full object-cover"
          />
          <span className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white opacity-0 group-hover/profile:opacity-100 transition-opacity duration-200 rounded-full">
            <FaPen />
          </span>
        </Link>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-gray-500 text-sm">Member since: {format(new Date(user.createdAt || "12-30-2024"), "MMM dd, yyy")}</p>
        </div>
      </div>

      {/* Contact & Account Info */}
      <div className="space-y-4 mb-6">
        <p className="text-lg text-gray-700 font-semibold">
          <span className="font-bold text-gray-800">Email:</span> {user.email}
        </p>
        
       
      </div>

      {/* Premium Access Section */}
      {!user.isPremium && user.role === "user" && (
        <div className="border-t pt-6 mt-6">
          <PremiumAccess />
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-8">
        <Link href="/profile/settings">
          <button className="bg-black hover:bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-sm font-semibold transition duration-150">
            Edit Profile
          </button>
        </Link>
        <button onClick={handleLogout} className="bg-black hover:bg-zinc-800 text-white px-4 py-2 rounded-lg shadow-sm font-semibold transition duration-150">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
