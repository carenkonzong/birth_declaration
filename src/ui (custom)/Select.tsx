type Props = {
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
  value1?: string;
  value2?: string;
  value3?: string;
  value4?: string;
  value5?: string;
  value6?: string;
  onChange?: (value: string) => void;
  type?: string;
};

function Select({
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  value1,
  value2,
  value3,
  value4,
  value5,
  value6,
  onChange,
  type,
}: Props) {
  return (
    <>
      <div className="mt-5">
        {type && <h1 className="mb-4 text-sm">{type}</h1>}
        <select
          className="border rounded-lg w-full p-2 border-black/10 bg-white"
          onChange={(e) => onChange?.(e.target.value)}
        >
          <option value={value1}>{option1}</option>
          <option value={value2}>{option2}</option>
          {option3 && <option value={value3}>{option3}</option>}
          {option4 && <option value={value4}>{option4}</option>}
          {option5 && <option value={value5}>{option5}</option>}
          {option6 && <option value={value6}>{option6}</option>}
        </select>
      </div>
    </>
  );
}

export default Select;
