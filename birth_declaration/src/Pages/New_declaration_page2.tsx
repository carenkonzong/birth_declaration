import { ArrowLeft, Send, Save } from "lucide-react";
import Heading from "../components/Heading";
import Button from "../UI Components/Button";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { Declaration } from "@/Types/Declaration";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const REQUIRED_FIELD = "This Field is required";
const schema = yup
  .object({
    status: yup.string().required(REQUIRED_FIELD).default("submitted"),
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
      placeOfBirth: yup.string().required(REQUIRED_FIELD),
    }),
    father: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      nationalId: yup.string().required(REQUIRED_FIELD),
      occupation: yup.string(),
    }),
    mother: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      nationalId: yup.string().required(REQUIRED_FIELD),
      occupation: yup.string(),
    }),
    declarant: yup.object({
      firstName: yup.string().required(REQUIRED_FIELD),
      lastName: yup.string().required(REQUIRED_FIELD),
      relationshipToChild: yup.string().required(REQUIRED_FIELD),
      email: yup.string().required(REQUIRED_FIELD),
      addInfo: yup.string(),
    }),
  })
  .required();

function New_declaration_page2() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Declaration>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Declaration> = (data) => console.log(data);

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
            </div>
            <div className="mt-5">
              <label htmlFor="placeOfBirth" className="text-sm">
                Place of Birth *
              </label>
              <input
                type="text"
                id="placeOfBirth"
                className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                {...register("child.placeOfBirth")}
              />
              <span className="text-red-400 text-xs">
                {errors.child?.placeOfBirth?.message}
              </span>
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
                  {errors.father?.nationalId?.message}
                </span>
              </div>
              <div className="mt-5">
                <label htmlFor="occupation" className="text-sm">
                  Occupation
                </label>
                <input
                  type="text"
                  id="occupation"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("father.occupation")}
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
                  {errors.mother?.nationalId?.message}
                </span>
              </div>
              <div className="mt-5">
                <label htmlFor="motherOccupation" className="text-sm">
                  Occupation
                </label>
                <input
                  type="text"
                  id="motherOccupation"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("mother.occupation")}
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
                <label htmlFor="declarantFirstName" className="text-sm">
                  First Name *
                </label>
                <input
                  type="text"
                  id="declarantFirstName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("declarant.firstName")}
                />

                <span className="text-red-400 text-xs">
                  {errors.declarant?.firstName?.message}
                </span>
              </div>
              <div className="mt-5">
                <label htmlFor="declarantLastName" className="text-sm">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="declarantLastName"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("declarant.lastName")}
                />

                <span className="text-red-400 text-xs">
                  {errors.declarant?.lastName?.message}
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
                <label htmlFor="contact" className="text-sm">
                  Contact Information *
                </label>
                <input
                  type="text"
                  id="contact"
                  placeholder="Email address"
                  className="border rounded-lg w-full border-black/10 bg-white p-2 mt-2"
                  {...register("declarant.email")}
                />
                <span className="text-red-400 text-xs">
                  {errors.declarant?.email?.message}
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
  );
}

export default New_declaration_page2;
