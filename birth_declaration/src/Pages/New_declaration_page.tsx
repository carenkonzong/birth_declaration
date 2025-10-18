import New_Declaration_element from "../New_Declaration_element";
import Input from "../UI Components/Input";
import Select from "../UI Components/Select";
import Heading from "../Heading";
import Bottom from "../Bottom";

function New_declaration_page() {
  return (
    <>
      <Heading
        head="Birth Declarations"
        subhead="Manage your Submissions"
        maxWidth="max-w-[1024px]"
      />
      <New_Declaration_element
        head="Child Information"
        subhead="Basic details about the child"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="First Name *" />
          <Input type="text" head="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="date" head="Date of Birth *" />
          <Select option1="Male" option2="Female" type="Gender *" />
        </div>
        <div>
          <Input
            type="text"
            head="Place of Birth *"
            placeholder="Hospital name or location"
          />
        </div>
      </New_Declaration_element>

      <New_Declaration_element
        head="Father Information"
        subhead="Details about the Father"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="First Name *" />
          <Input type="text" head="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="ID Number *" />
          <Input type="text" head="Occupation" placeholder="Optional" />
        </div>
      </New_Declaration_element>

      <New_Declaration_element
        head="Mother Information"
        subhead="Details about the Mother"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="First Name *" />
          <Input type="text" head="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="ID Number *" />
          <Input type="text" head="Occupation" placeholder="Optional" />
        </div>
      </New_Declaration_element>

      <New_Declaration_element
        head="Informant Information"
        subhead="Details about the person making this declaration"
      >
        <div className="grid grid-cols-2 gap-10">
          <Input type="text" head="First Name *" />
          <Input type="text" head="First Name *" />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <Input
            type="text"
            head="Relationship to Child *"
            placeholder="e.g., Father, Mother, Guardian"
          />
          <Input
            type="text"
            head="Contact Information *"
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
      <Bottom />
    </>
  );
}

export default New_declaration_page;
