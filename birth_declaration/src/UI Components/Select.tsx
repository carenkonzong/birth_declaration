type Props = {
  option1: string;
  option2: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
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
  onChange,
  type,
}: Props) {
  return (
    <>
      <div>
        {type && <h1 className="mb-3 text-sm">{type}</h1>}
        <select
          className="border rounded-lg w-full border-black/10 bg-white p-2"
          onChange={(e) => onChange?.(e.target.value)}
        >
          <option>{option1}</option>
          <option>{option2}</option>
          {option3 && <option>{option3}</option>}
          {option4 && <option>{option4}</option>}
          {option5 && <option>{option5}</option>}
          {option6 && <option>{option6}</option>}
        </select>
      </div>
    </>
  );
}

export default Select;
