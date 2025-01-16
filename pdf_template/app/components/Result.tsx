import Seperator from "../ui/Seperator";

export default function Result() {
  return (
    <div>
      <div className="h-96" />
      <div className="space-y-8">
        {/* Header Section */}
        <h2 className="font-bold text-3xl">CODING ASSESSMENT</h2>
        <p className="text-xl">
          You attempted coding challenges divided across 4 complexity levels mapped to different company bands. These questions were designed keeping in mind the requirements of various roles in each band of companies. Your final score will be calculated by the completeness of your code and its ability to pass all the test cases. Based on the range of your total score after the coding test, your level of proficiency is declared as L1 (Below Average), L2 (Average), L3 (Above Average), and L4 (Exceptional).
        </p>
      </div>

      <div className="my-8">
        <h3 className="font-bold text-3xl">SCORING CRITERIA</h3>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full border-collapse border border-gray-300 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 text-xl">Range of Score</th>
                <th className="border border-gray-300 px-6 py-3 text-xl">Level of proficiency</th>
                <th className="border border-gray-300 px-6 py-3 text-xl">Descriptor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-4 text-lg">0 - 8 points</td>
                <td className="border border-gray-300 px-6 py-4 font-bold text-lg">Level 1</td>
                <td className="border border-gray-300 px-6 py-4 text-lg">Focus on building fundamental skills and tackling more complex algorithms.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4 text-lg">9 - 22 points</td>
                <td className="border border-gray-300 px-6 py-4 font-bold text-lg">Level 2</td>
                <td className="border border-gray-300 px-6 py-4 text-lg">Strong candidate with room for growth, focusing on refining optimization and solving more challenging problems.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4 text-lg">23 - 46 points</td>
                <td className="border border-gray-300 px-6 py-4 font-bold text-lg">Level 3</td>
                <td className="border border-gray-300 px-6 py-4 text-lg">Solid fit for mid-level roles with further improvement needed in optimization and advanced algorithms.</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4 text-lg">47 - 70 points</td>
                <td className="border border-gray-300 px-6 py-4 font-bold text-lg">Level 4</td>
                <td className="border border-gray-300 px-6 py-4 text-lg">Strong candidate for technical roles, demonstrating high proficiency and the ability to handle real-world challenges.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Separator */}
      <div className="my-8">
        <Seperator />
      </div>

      <div className="space-y-8">
        {/* Result Section */}
        <h3 className="font-bold text-3xl ">RESULT</h3>
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Performance Table */}
          <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 text-center">
          <thead>
            <tr className="bg-gray-100">
          <th className="border border-gray-300 px-6 py-3 text-xl">Set</th>
          <th className="border border-gray-300 px-6 py-3 text-xl">Marks Scored</th>
            </tr>
          </thead>
          <tbody>
            <tr>
          <td className="border border-gray-300 px-6 py-4 text-lg">L1</td>
          <td className="border border-gray-300 px-6 py-4 text-lg">0/8</td>
            </tr>
            <tr>
          <td className="border border-gray-300 px-6 py-4 text-lg">L2</td>
          <td className="border border-gray-300 px-6 py-4 text-lg">0/14</td>
            </tr>
            <tr>
          <td className="border border-gray-300 px-6 py-4 text-lg">L3</td>
          <td className="border border-gray-300 px-6 py-4 text-lg">0/24</td>
            </tr>
            <tr>
          <td className="border border-gray-300 px-6 py-4 text-lg">L4</td>
          <td className="border border-gray-300 px-6 py-4 text-lg">24/24</td>
            </tr>
            <tr className="font-bold">
          <td className="border border-gray-300 px-6 py-4 text-lg">Total Score</td>
          <td className="border border-gray-300 px-6 py-4 text-lg">24/70</td>
            </tr>
          </tbody>
        </table>
          </div>

          {/* Proficiency Details */}
          <div className="bg-black text-white p-8 space-y-4">
        <h2 className="text-3xl font-bold">LEVEL 1 PROFICIENCY</h2>
        <p className="text-lg">
          At this stage, your coding skills are still in the foundational phase. You’ve demonstrated an understanding of basic programming concepts such as matrix manipulation and binary string operations.
        </p>
        <p className="text-lg">
          You’ll need to strengthen your problem-solving skills, particularly in more complex algorithmic challenges.
        </p>
        <p className="text-lg">
          Focus on improving your logic, learning advanced data structures, and refining your coding techniques to move to the next level.
        </p>
          </div>
        </div>
      </div>
      </div>
  );
}
