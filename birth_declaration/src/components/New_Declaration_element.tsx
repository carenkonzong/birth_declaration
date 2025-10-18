type Props = {
  head: string;
  subhead: string;
  children?: React.ReactNode;
};

function New_Declaration_element({ head, subhead, children }: Props) {
  return (
    <div className="flex justify-center pt-5 mb-5">
      <div className="max-w-[1024px] bg-[#fbfbfb] border w-full p-8 pb-5 shadow-lg rounded-2xl border-black/10">
        <h1 className="text-xl font-medium ">{head}</h1>
        <h2 className="text-sm mb-8 text-gray-500">{subhead}</h2>
        {children}
      </div>
    </div>
  );
}

export default New_Declaration_element;
