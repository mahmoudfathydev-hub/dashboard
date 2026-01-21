import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";
import BgCircle from "@/components/BgCircle";
import BgSquare from "@/components/BgSquare";

export default function Home() {
  const types = [
    { id: 1, role: "Manager", desc: "View reports and project health", img: "/manager.png" },
    { id: 2, role: "Team Lead", desc: "Manage sprints and team velocity", img: "/teamlead.png" },
    { id: 3, role: "Engineer", desc: "Access tasks and code reviews", img: "/engineer.png" }
  ];

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-[#131022]">
      <div className="relative w-full max-w-md sm:max-w-lg">
        <BgCircle className="hidden sm:block" />
        <BgSquare className="hidden sm:block" />
        <div className="relative z-10 bg-[#1E1B2E] border border-[#3A3750] rounded-2xl w-full p-5 sm:p-8">
          <div className="text-center text-white mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold mb-2">Welcome Back</h2>
            <p className="text-gray-400 text-xs sm:text-sm">
              Identify your role to access your personalized
              <br className="hidden sm:block" />
              workspace and dashboard.
            </p>
          </div>
          <div className="space-y-3 sm:space-y-4">
            {types.map(type => (
              <div
                key={type.id}
                className="group flex items-center justify-between bg-[#2A2738] border border-transparent rounded-xl p-3 sm:p-4 transition-all duration-300 hover:border-purple-500 hover:bg-[#312E45] cursor-pointer"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-[#1E1B2E]">
                    <Image src={type.img} alt={type.role} width={24} height={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium sm:font-semibold text-sm sm:text-base">
                      {type.role}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {type.desc}
                    </p>
                  </div>
                </div>
                <FaChevronRight className="text-gray-400 transition-transform duration-300 group-hover:-translate-x-1" />
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-center text-xs sm:text-sm mt-6 sm:mt-8 hover:text-white transition cursor-pointer">
            Forget Password?
          </p>
        </div>
      </div>
    </main>
  );
}
