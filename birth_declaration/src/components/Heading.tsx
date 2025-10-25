type Props = {
  head: string;
  subhead: string;
  children?: React.ReactNode;
};

function Heading({ head, subhead, children }: Props) {
  return (
    <div className="flex justify-center py-5 mx-5">
      <div className="flex w-full flex-col">
        <div className="flex">
          <div>
            <h1 className="text-2xl font-semibold mb-1">{head}</h1>
            <h2 className="text-gray-500 text-lg">{subhead}</h2>
          </div>

          <div className="ml-auto flex items-center">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Heading;
