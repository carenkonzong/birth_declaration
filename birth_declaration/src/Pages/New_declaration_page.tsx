import New_Declaration_element from "../components/New_Declaration_element";
import Input from "../UI Components/Input";
import Select from "../UI Components/Select";
import Heading from "../components/Heading";
import Button from "../UI Components/Button";
import { ArrowLeft, Send, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import type { Profile } from "@/Types/Profile";
import type { SubmitHandler } from "react-hook-form";

function New_declaration_page() {
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
        <New_Declaration_element
          head="Child Information"
          subhead="Basic details about the child"
        >
          <div className="grid grid-cols-2 gap-10">
            <div>
              <Input
                type="text"
                head="First Name *"
                id="firstName"
                htmlfor="firstName"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-red-400 text-xs">
                  First Name is required
                </span>
              )}
            </div>
            <Input
              type="text"
              head="Last Name *"
              id="lastName"
              htmlfor="lastName"
              {...register("firstName", { required: true })}
            />
            {errors.firstName && (
              <span className="text-red-400 text-xs">
                First Name is required
              </span>
            )}
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input type="date" head="Date of Birth *" id="dob" htmlfor="dob" />
            <Select option1="Male" option2="Female" type="Gender *" />
          </div>
          <div>
            <Input
              type="text"
              head="Place of Birth *"
              id="pob"
              htmlfor="pob"
              placeholder="Hospital name or location"
            />
          </div>
        </New_Declaration_element>
        <New_Declaration_element
          head="Father Information"
          subhead="Details about the Father"
        >
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="First Name *"
              id="fatherFirstName"
              htmlfor="fatherFirstName"
            />
            <Input
              type="text"
              head="Last Name *"
              id="fatherLastName"
              htmlfor="fatherLastName"
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="ID Number *"
              id="idNumber"
              htmlfor="idNumber"
            />
            <Input
              type="text"
              head="Occupation"
              placeholder="Optional"
              id="occupation"
              htmlfor="occupation"
            />
          </div>
        </New_Declaration_element>
        <New_Declaration_element
          head="Mother Information"
          subhead="Details about the Mother"
        >
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="First Name *"
              id="motherFirstName"
              htmlfor="motherFirstName"
            />
            <Input
              type="text"
              head="Last Name *"
              id="motherLastName"
              htmlfor="motherLastName"
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="ID Number *"
              id="motherIdNumber"
              htmlfor="motherIdNumber"
            />
            <Input
              type="text"
              head="Occupation"
              placeholder="Optional"
              id="motherOccupation"
              htmlfor="motherOccupation"
            />
          </div>
        </New_Declaration_element>
        <New_Declaration_element
          head="Informant Information"
          subhead="Details about the person making this declaration"
        >
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="First Name *"
              id="informantFirstName"
              htmlfor="informantFirstName"
            />
            <Input
              type="text"
              head="First Name *"
              id="informantLastName"
              htmlfor="informantLastName"
            />
          </div>
          <div className="grid grid-cols-2 gap-10">
            <Input
              type="text"
              head="Relationship to Child *"
              id="relationship"
              htmlfor="relationship"
              placeholder="e.g., Father, Mother, Guardian"
            />
            <Input
              type="text"
              head="`Contact Information *`"
              id="contact"
              htmlfor="contact"
              placeholder="Phone number or email"
            />
          </div>
          <div className="mb-5">
            <h3 className="mb-3 text-sm">Additional information</h3>
            <textarea
              placeholder="Any additional information (optional)"
              className="border rounded-lg w-full border-black/10 bg-white p-2"
              rows={5}
            />
          </div>
        </New_Declaration_element>
        {/* <Bottom /> */}
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

export default New_declaration_page;
