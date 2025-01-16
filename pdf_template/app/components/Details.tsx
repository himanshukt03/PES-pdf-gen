export default function Details() {
  return (
    <div className="space-y-4 text-xl">
      {/* Name Field */}
      <div className="flex items-center text-2xl">
        <span className="font-medium text-black mr-4 w-32">Name :</span>
        <span className="font-bold text-black border-b-2 border-dotted border-gray-400 flex-grow">
          PANISH S
        </span>
      </div>

      {/* Branch Field */}
      <div className="flex items-center text-2xl">
        <span className="font-medium text-black mr-4 w-32">Branch :</span>
        <span className="font-bold text-black border-b-2 border-dotted border-gray-400 flex-grow">
          COMPUTER SCIENCE AND ENGINEERING
        </span>
      </div>

      {/* Special Row for Semester and USN */}
      <div className="flex items-center text-2xl">
        {/* Semester */}
        <span className="font-medium text-black mr-4 w-32">Semester :</span>
        <span className="font-bold text-black border-b-2 border-dotted border-gray-400 flex-grow mr-8">
          V SEM
        </span>

        {/* USN */}
        <span className="font-medium text-black mr-4 w-20">USN :</span>
        <span className="font-bold text-black border-b-2 border-dotted border-gray-400 flex-grow">
          4PS22CS114
        </span>
      </div>
    </div>
  );
}
