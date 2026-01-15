type Props = {
  head: string;
  subhead: string;
  children?: React.ReactNode;
};

function NewDeclarationElement({ head, subhead, children }: Props) {
  return (
    <div className="flex justify-center pt-5 mb-5 mx-5">
      <div className="max-w-5xl bg-[#fbfbfb] border w-full p-8 shadow-lg rounded-2xl border-black/10">
        <h1 className="text-xl font-medium ">{head}</h1>
        <h2 className="text-sm mb- text-gray-500">{subhead}</h2>
        {children}
      </div>
    </div>
  );
}

export default NewDeclarationElement;
