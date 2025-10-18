type Props = {
  option1: string;
  option2: string;
  type: string;
};

function Select({ option1, option2, type }: Props) {
  return (
    <>
      <div>
        <h1 className="mb-3 text-sm">{type}</h1>
        <select className="border rounded-lg w-full border-black/10 bg-white p-2">
          <option>{option1}</option>
          <option>{option2}</option>
        </select>
      </div>
    </>
  );
}

export default Select;
