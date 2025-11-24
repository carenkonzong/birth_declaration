import { ArrowLeft, Send, Save } from "lucide-react";
import Heading from "../components/Heading";
import Button from "../UI Components/Button";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { Profile } from "@/Types/Profile";

function New_declaration_page2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Profile>();

  const onSubmit: SubmitHandler<Profile> = (data) => console.log(data);

  return (
    <>
      <Heading head="Birth Declarations" subhead="Declare a new Birth">
        <Button btnHead="Back to Dashboard" icon={ArrowLeft} link="/" />
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center pt-5 mb-5 mx-5">
          <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 shadow-lg rounded-2xl border-black/10">
            <h1 className="text-xl font-medium ">Child Information</h1>
            <h2 className="text-sm mb- text-gray-500">
              Basic details about the child
            </h2>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="mt-5">
                <label htmlFor="firstName" className="text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-400 text-xs">
                    First Name is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="lastName" className="text-sm">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && (
                  <span className="text-red-400 text-xs">
                    Last Name is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="dob" className="text-sm">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  id="dob"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("dateOfBirth", { required: true })}
                />
                {errors.dateOfBirth && (
                  <span className="text-red-400 text-xs">
                    Date of Birth is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="gender" className="text-sm">
                  Gender *
                </label>
                <select
                  id="gender"
                  className="border rounded-lg w-full p-2 mt-2 border-black/10 bg-white"
                  {...register("gender", { required: true })}
                >
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {errors.gender && (
                  <span className="text-red-400 text-xs">
                    Gender is required
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center pt-5 mb-5 mx-5">
          <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 shadow-lg rounded-2xl border-black/10">
            <h1 className="text-xl font-medium ">Father Information</h1>
            <h2 className="text-sm mb- text-gray-500">
              Details about the Father
            </h2>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="mt-5">
                <label htmlFor="fatherFirstName" className="text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  id="fatherFirstName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-400 text-xs">
                    First Name is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="fatherLastName" className="text-sm">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="fatherLastName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && (
                  <span className="text-red-400 text-xs">
                    Last Name is required
                  </span>
                )}
              </div>
              <div className="mt-5">
                <label htmlFor="idnum" className="text-sm">
                  ID Number *
                </label>
                <input
                  type="text"
                  id="idnum"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("nationalId", { required: true })}
                />
                {errors.nationalId && (
                  <span className="text-red-400 text-xs">
                    ID Number is required
                  </span>
                )}
              </div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-center mb-5">
          <div className="max-w-5xl bg-[#fbfbfb] border w-full p-5 shadow-lg rounded-2xl border-black/10 flex justify-between">
            <button className="px-6 py-3 rounded-xl transition-all duration-300 border border-black/10 hover:-translate-y-1 hover:shadow-lg flex  cursor-pointer ">
              <Save className="mr-3 flex items-center" />
              Save as Draft
            </button>
            <button
              type="submit"
              className="bg-[#3582f8] text-white flex cursor-pointer  px-6 py-3 rounded-xl transition-all duration-300 border border-black/10 hover:bg-[#075bd9] hover:-translate-y-1 hover:shadow-lg"
            >
              <Send className="mr-3 flex items-center" />
              Submit Declaration
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default New_declaration_page2;
