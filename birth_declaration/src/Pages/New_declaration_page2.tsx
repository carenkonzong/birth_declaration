import { ArrowLeft, Send, Save } from "lucide-react";
import Heading from "../components/Heading";
import Button from "../ui/Button";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { Declaration } from "@/types/Declaration";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { create } from "../services/index";
import { useState } from "react";

const REQUIRED_FIELD = "This Field is required";
const schema = yup
  .object({
    status: yup.string().required(REQUIRED_FIELD).default("draft"),
    submittedAt: yup
      .string()
      .required(REQUIRED_FIELD)
      .default(
        new Date().toLocaleDateString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
        })
      ),
    child: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      dateOfBirth: yup.string().required(REQUIRED_FIELD),
      gender: yup.string().required(REQUIRED_FIELD),
      cityOfBirth: yup.string().required(REQUIRED_FIELD),
      timeOfBirth: yup.string().required(REQUIRED_FIELD),
    }),
    father: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      nationalId: yup.string().required(REQUIRED_FIELD),
      nationality: yup.string().required(REQUIRED_FIELD),
    }),
    mother: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      nationalId: yup.string().required(REQUIRED_FIELD),
      nationality: yup.string().required(REQUIRED_FIELD),
    }),
    declarant: yup.object({
      fullName: yup.string().required(REQUIRED_FIELD),
      relationshipToChild: yup.string().required(REQUIRED_FIELD),
      email: yup.string().required(REQUIRED_FIELD),
      phone: yup.string().required(REQUIRED_FIELD),
      addInfo: yup.string(),
    }),
  })
  .required();

function New_declaration_page2() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Declaration>({
    resolver: yupResolver(schema),
  });

  const [display, setDisplay] = useState("FORM");

  const onSubmit: SubmitHandler<Declaration> = async (data) => {
    const response = await create("declarations", data);

    if (response.status === 201 || 200) {
      reset();
      setDisplay("COMPLETED");
    }
  };

  return (
    <>
      {display === "FORM" ? (
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
                    <label htmlFor="childFirstName" className="text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstchildFirstNameName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("child.firstName")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.child?.firstName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="lastName" className="text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("child.lastName")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.child?.lastName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="dob" className="text-sm">
                      Date of Birth *
                    </label>
                    <input
                      type="date"
                      id="dob"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("child.dateOfBirth")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.child?.dateOfBirth?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="gender" className="text-sm">
                      Gender *
                    </label>
                    <select
                      id="gender"
                      className="border rounded-lg w-full p-2 mt-2 border-black/10 bg-white"
                      {...register("child.gender")}
                    >
                      <option value=""></option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>

                    <span className="text-red-400 text-xs">
                      {errors.child?.gender?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="placeOfBirth" className="text-sm">
                      Time of Birth *
                    </label>
                    <input
                      type="time"
                      id="timeOfBirth"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("child.timeOfBirth")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.child?.timeOfBirth?.message}
                    </span>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="placeOfBirth" className="text-sm">
                      City of Birth *
                    </label>
                    <input
                      type="text"
                      id="placeOfBirth"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("child.cityOfBirth")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.child?.cityOfBirth?.message}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5 mb-5 mx-5">
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
                      {...register("father.firstName")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.father?.firstName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="fatherLastName" className="text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="fatherLastName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("father.lastName")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.father?.lastName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="idnum" className="text-sm">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      id="idnum"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("father.nationalId")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.father?.nationality?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="fatherNationality" className="text-sm">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="fatherNationality"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("father.nationality")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5 mb-5 mx-5">
              <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 shadow-lg rounded-2xl border-black/10">
                <h1 className="text-xl font-medium ">Mother Information</h1>
                <h2 className="text-sm mb- text-gray-500">
                  Details about the Mother
                </h2>
                <div className="grid grid-cols-2 gap-x-10">
                  <div className="mt-5">
                    <label htmlFor="motherFirstName" className="text-sm">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="motherFirstName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("mother.firstName")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.mother?.firstName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="motherLastName" className="text-sm">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="motherLastName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("mother.lastName")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.mother?.lastName?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="motherIdNum" className="text-sm">
                      ID Number *
                    </label>
                    <input
                      type="text"
                      id="motherIdNum"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("mother.nationalId")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.mother?.nationality?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="motherNationality" className="text-sm">
                      Nationality *
                    </label>
                    <input
                      type="text"
                      id="motherNationality"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("mother.nationality")}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center pt-5 mb-5 mx-5">
              <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 shadow-lg rounded-2xl border-black/10">
                <h1 className="text-xl font-medium ">Informant Information</h1>
                <h2 className="text-sm mb- text-gray-500">
                  Details about the person making this declaration
                </h2>
                <div className="grid grid-cols-2 gap-x-10">
                  <div className="mt-5">
                    <label htmlFor="declarantFullName" className="text-sm">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="declarantFullName"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("declarant.fullName")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.declarant?.fullName?.message}
                    </span>
                  </div>

                  <div className="mt-5">
                    <label htmlFor="relationship" className="text-sm">
                      Relationship to Child *
                    </label>
                    <input
                      type="text"
                      id="relationship"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("declarant.relationshipToChild")}
                    />

                    <span className="text-red-400 text-xs">
                      {errors.declarant?.relationshipToChild?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="email" className="text-sm">
                      Email *
                    </label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Email address"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("declarant.email")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.declarant?.email?.message}
                    </span>
                  </div>
                  <div className="mt-5">
                    <label htmlFor="phone" className="text-sm">
                      Phone *
                    </label>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Phone number"
                      className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                      {...register("declarant.phone")}
                    />
                    <span className="text-red-400 text-xs">
                      {errors.declarant?.phone?.message}
                    </span>
                  </div>
                </div>
                <div className="mt-5">
                  <label htmlFor="addInfo" className="text-sm">
                    Additional information
                  </label>
                  <textarea
                    id="addInfo"
                    placeholder="Any additional information (optional)"
                    className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                    rows={5}
                    {...register("declarant.addInfo")}
                  />
                  <span className="text-red-400 text-xs">
                    {errors.declarant?.addInfo?.message}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex justify-center mb-5">
              <div className="max-w-5xl bg-[#fbfbfb] border w-full p-5 shadow-lg rounded-2xl border-black/10 flex justify-between">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl transition-all duration-300 border border-black/10 hover:-translate-y-1 hover:shadow-lg flex  cursor-pointer "
                >
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
      ) : null}
      {display === "COMPLETED" ? (
        <>
          <section>
            <h1>Form completed successfully</h1>
          </section>
        </>
      ) : null}
    </>
  );
}

export default New_declaration_page2;
