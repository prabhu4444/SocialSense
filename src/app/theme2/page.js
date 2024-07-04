import profile from "@/assets/profile.png"; 
import Theme2_Sidebar from "@/components/theme2/Theme2_Sidebar";
import Theme2_Navbar from "@/components/theme2/Theme2_Navbar";
import ProfileSection from "@/components/theme2/ProfileSection";
import RoleTeamSelection from "@/components/theme2/RoleTeamSelection";
import OnboardingSection from "@/components/theme2/OnboardingSection"; 
export default function Theme2() {
  return (
    <div className="flex ">
      <div className="bg-gray-200 w-1/12">
        <Theme2_Sidebar />
      </div>
      <div className="w-11/12 flex flex-col bg-white">
        <Theme2_Navbar />
        <div className="flex flex-grow">
          <div className="w-1/3 p-4">
            <ProfileSection profile={profile} />
          </div>
          <div className="w-1/3 p-4">
            <RoleTeamSelection />
          </div>
          <div className="w-1/3 p-4">
            <OnboardingSection /> 
          </div>
        </div>
      </div>
    </div>
  );
}
