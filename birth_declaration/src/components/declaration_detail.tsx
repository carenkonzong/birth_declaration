import Heading from "./Heading";
import Top_bar from "./Top_bar";
import Details from "./Details";
import Head from "../components/Head";
import { Calendar, MapPin, User, ArrowLeft, Mail } from "lucide-react";
import Button from "../ui/Button";
import { ENV } from "../config/env";
import { useEffect, useState } from "react";
import type { Declaration } from "@/types/Declaration";
import { useParams } from "react-router-dom";

function Declaration_detail() {
  const [singleDeclaration, setSingleDeclaration] = useState<Declaration>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const fetchDeclaration = async (id: string) => {
    try {
      setLoading(true);
      const response = await fetch(`${ENV.API_URL}/declarations/${id}`);
      if (!response.ok) {
        console.log(response);
        const code = response.status;
        if (code === 404) {
          throw new Error("Declaration not found");
        } else {
          throw new Error("Failed to fetch declaration");
        }
      }
      const data = await response.json();
      setSingleDeclaration(data);
    } catch (error) {
      console.log(error);
      setError(error instanceof Error ? error.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) {
      fetchDeclaration(id);
    } else {
      setError("No declaration ID provided");
      setLoading(false);
    }
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!singleDeclaration) return <div>No declaration found</div>;

  const { child, father, mother, declarant } = singleDeclaration;

  return (
    <>
      <Top_bar />
      <div className="flex justify-center mx-5 flex-col">
        <Heading head="Declaration details" subhead="ID: 8">
          <Button btnHead="Back to Dashboard" icon={ArrowLeft} link="/" />
        </Heading>
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head
            head="Child Information"
            subhead="Basic information about the child"
            size={18}
          />
          <div className="grid grid-cols-2">
            <Details label="First Name" info={child.firstName} />
            <Details label="Last Name" info={child.lastName} />
          </div>
          <div className="grid grid-cols-2">
            <Details label="Gender" info={child.gender} />
            <Details
              label="Date of Birth"
              info={child.dateOfBirth}
              icon={Calendar}
            />
          </div>
          <div>
            <Details
              label="Place of Birth"
              info={child.cityOfBirth}
              icon={MapPin}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-10 mx-5 gap-5">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Father Information" />
          <Details
            label="Full Name"
            info={`${father.firstName} ${father.lastName}`}
          />
          <Details label="ID number" info={father.nationalId} />
          <Details label="Nationality" info="Canadian" />
        </div>
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Mother Information" icon={User} />
          <Details
            label="Full Name"
            info={`${mother.firstName} ${mother.lastName}`}
          />
          <Details label="ID number" info={mother.nationalId} />
          <Details label="Nationality" info={mother.nationality} />
        </div>
      </div>
      <div className="flex justify-center pt-10 mx-5 gap-5 mb-5">
        <div className="flex w-full  p-5 border rounded-2xl border-black/10 flex-col bg-[#fafafa]">
          <Head head="Declarant Information" />
          <div className="grid grid-cols-2 gap-15">
            <div>
              <Details label="Full Name" info={declarant.fullName} />
              <Details label="Phone" info={declarant.phone} />
              <Details label="Email" info={declarant.email} icon={Mail}>
                <div className="mt-5">
                  <h1 className="text-gray-500 text-sm">
                    Relationship to Child
                  </h1>
                  <h2 className="font-light text-gray-800 flex items-center">
                    {declarant.relationshipToChild}
                  </h2>
                </div>
              </Details>
            </div>
            <div>
              {declarant.addInfo && (
                <Details
                  label="Additional information"
                  info={declarant.addInfo}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Declaration_detail;
