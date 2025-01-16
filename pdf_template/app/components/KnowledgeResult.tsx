export default function AssessmentResult() {
  return (
    <div className="space-y-12 text-xl">
      <h1 className="font-bold text-3xl">
        YOUR RESULTS OF THE KNOWLEDGE AND CODING ASSESSMENTS
      </h1>

      {/* Knowledge Assessment Section */}
      <div>
        <h2 className="font-bold text-2xl">KNOWLEDGE ASSESSMENT</h2>
        <p className="text-2xl">
          You participated in an aptitude assessment to evaluate your cognitive
          abilities and identify your strengths and areas for development. The
          assessment covered verbal reasoning, logical problem-solving, and
          quantitative aptitude. Note, aptitude is not equivalent to IQ. Your
          aptitude can be developed over time through practice.
        </p>
      </div>

      <div className="overflow-x-auto text-lg">
        <table className="min-w-full border-collapse border border-gray-400 rounded-lg shadow-md text-xl">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="border border-gray-400 px-6 py-4 text-left font-semibold">
                Range of Score out of 10
              </th>
              <th className="border border-gray-400 px-6 py-4 text-center font-semibold">
                Level of Proficiency
              </th>
              <th className="border border-gray-400 px-6 py-4 text-left font-semibold">
                Descriptor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {/* L4 - Basic */}
            <tr className="odd:bg-gray-50">
              <td className="border border-gray-400 px-6 py-4 text-left">0 - 1 point</td>
              <td className="border border-gray-400 px-6 py-4 text-center font-medium">L4 - Basic</td>
              <td className="border border-gray-400 px-6 py-4 text-left">
                Limited to basic syntax, language features, and debugging.
              </td>
            </tr>

            {/* L3 - GCC/GSIs */}
            <tr className="odd:bg-gray-50">
              <td className="border border-gray-400 px-6 py-4 text-left">2 - 3 points</td>
              <td className="border border-gray-400 px-6 py-4 text-center font-medium">L3 - GCC/GSIs</td>
              <td className="border border-gray-400 px-6 py-4 text-left">
                Familiarity with foundational programming concepts like stack operations and basic algorithm requirements.
              </td>
            </tr>

            {/* L2 - GCC */}
            <tr className="odd:bg-gray-50">
              <td className="border border-gray-400 px-6 py-4 text-left">4 - 6 points</td>
              <td className="border border-gray-400 px-6 py-4 text-center font-medium">L2 - GCC</td>
              <td className="border border-gray-400 px-6 py-4 text-left">
                Solid understanding of intermediate programming concepts like search/sort complexities and basic data structure usage.
              </td>
            </tr>

            {/* L1 - MAANG */}
            <tr className="odd:bg-gray-50">
              <td className="border border-gray-400 px-6 py-4 text-left">7 - 10 points</td>
              <td className="border border-gray-400 px-6 py-4 text-center font-medium">L1 - MAANG</td>
              <td className="border border-gray-400 px-6 py-4 text-left">
                Mastery in solving advanced questions related to algorithm complexity and critical data structure usage.
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Role Suitability Section */}
      <div className="w-full bg-black text-white p-8 space-y-4 font-light">
        <p className="text-2xl">You&apos;re most likely suited for</p>
        <p className="font-bold text-2xl">Top-tier companies like MAANG and high-performing teams in GCCs.</p>
        <p className="text-2xl">
        Your advanced knowledge makes you ideal for roles like Software Engineer, Algorithm Developer, or Data Scientist in challenging, high-impact environments.
        </p>
      </div>

      <div className="flex justify-between items-start space-x-4 p-4">
        {/* Left Section - Scoring Table */}
        <div className="overflow-x-auto w-[65%]">
          <table className="min-w-full border-collapse border border-gray-300 text-left text-base">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-6 py-3 w-40">Complexity</th>
                <th className="border border-gray-300 px-6 py-3 w-36">Total Score</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-6 py-4">L1</td>
                <td className="border border-gray-300 px-6 py-4">10/10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">L2</td>
                <td className="border border-gray-300 px-6 py-4">10/10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">L3</td>
                <td className="border border-gray-300 px-6 py-4">10/10</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-6 py-4">L4</td>
                <td className="border border-gray-300 px-6 py-4">10/10</td>
              </tr>
              <tr className="font-bold">
                <td className="border border-gray-300 px-6 py-4">Overall Score</td>
                <td className="border border-gray-300 px-6 py-4">10/10</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Right Section - Band and Level */}
        <div className="space-y-4 flex flex-col items-center text-white text-2xl font-bold w-[30%]">
          <div className="bg-black w-full h-24 text-center flex items-center justify-center">
            <h2>BAND: MAANG</h2>
          </div>
          <div className="bg-black w-full h-24 text-center flex items-center justify-center">
            <h2>LEVEL 1 PROFICIENCY</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
