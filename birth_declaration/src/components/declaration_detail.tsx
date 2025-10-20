import Top_bar from "./Top_bar";
import Details from "./details";
import Head from "./head";
import { Calendar, MapPin, User } from "lucide-react";

function Declaration_detail() {
  return (
    <>
      <Top_bar />
      <div className="flex justify-center pt-10 mx-5 flex-col">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head
            head="Child Information"
            subhead="Basic information about the child"
            size={18}
          />
          <div className="grid grid-cols-2">
            <Details label="First Name" info="Ethan" />
            <Details label="Last Name" info="Anderson" />
          </div>
          <div className="grid grid-cols-2">
            <Details label="Gender" info="Male" />
            <Details label="Date of Birth" info="8/13/2024" icon={Calendar} />
          </div>
          <div>
            <Details
              label="Place of Birth"
              info="Children's Hospital"
              icon={MapPin}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 mx-5 gap-5">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Father Information" />
          <Details label="Full Name" info="Andrew Anderson" />
          <Details label="Date of Birth" info="9/27/1984" />
          <Details label="Nationality" info="Canadian" />
        </div>
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Mother Information" icon={User} />
          <Details label="Full Name" info="Catherine Anderson" />
          <Details label="Date of Birth" info="2/15/1988" />
          <Details label="Nationality" info="Canadian" />
        </div>
      </div>
      <div className="flex justify-center pt-10 mx-5 gap-5">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Informant Information" />
          <Details label="Full Name" info="Catherine Anderson" />
          <Details label="Phone" info="+1-204-555-0167" />

          <Details
            label="Address"
            info="147 Poplar Street, Winnipeg, MB"
            icon={MapPin}
          >
            <div className="mt-5">
              <h1 className="text-gray-500 text-sm">Relationship to Child</h1>
              <h2 className="font-light text-gray-800 flex items-center">
                Mother
              </h2>
            </div>
          </Details>
        </div>
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head
            head="Facility Information"
            subhead="Where the birth took place"
            icon={MapPin}
          />
          <Details label="Facility Name" info="Children's Hospital" />
          <Details
            label="Address"
            info="258 Health Blvd, Winnipeg, MB"
            icon={MapPin}
          />

          <Details label="Attendant" info="DR. Lee" />
        </div>
      </div>
    </>
  );
}

export default Declaration_detail;
