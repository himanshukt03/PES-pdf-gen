export default function AptitudeTable() {
  return (
    <div className="overflow-x-auto text-lg">
      <table className="min-w-full border-collapse border border-gray-400 rounded-lg shadow-md text-xl">
        <thead className="bg-gray-200 text-gray-700">
          <tr>
            <th className="border border-gray-400 px-6 py-4 text-left font-semibold">Aptitude Area</th>
            <th className="border border-gray-400 px-6 py-4 text-center font-semibold">Scores by Complexity</th>
            <th className="border border-gray-400 px-6 py-4 text-left font-semibold">Level</th>
            <th className="border border-gray-400 px-6 py-4 text-left font-semibold">Performance Indicator</th>
          </tr>
        </thead>
        <tbody className="bg-gray-50">
          {/* Quantitative Aptitude */}
          <tr className="odd:bg-gray-100">
            <td className="border border-gray-400 px-6 py-4 font-medium">Quantitative Aptitude</td>
            <td className="border border-gray-400 px-6 py-4 text-base text-center">
              <div className="flex flex-col">
                <div className="flex items-center py-2 border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L1:</span> <span className="text-xl">3/3</span>
                </div>
                <div className="flex items-center py-2 l2-height border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L2:</span> <span className="text-xl">0/8</span>
                </div>
                <div className="flex items-center py-2 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L3:</span> <span className="text-xl">3/6</span>
                </div>
              </div>
            </td>
            <td className="border border-gray-400 px-6 py-4 text-center font-medium l2-height">L2 (Above Average)</td>
            <td className="border border-gray-400 px-6 py-4 text-lg">
              You've demonstrated a solid grasp of quantitative reasoning and problem-solving. Keep refining your skills for even greater efficiency and speed in tackling complex problems.
            </td>
          </tr>

          {/* Verbal Aptitude */}
          <tr className="odd:bg-gray-100">
            <td className="border border-gray-400 px-6 py-4 font-medium">Verbal Aptitude</td>
            <td className="border border-gray-400 px-6 py-4 text-base text-center">
              <div className="flex flex-col">
                <div className="flex items-center py-2 border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L1:</span> <span className="text-xl">2/3</span>
                </div>
                <div className="flex items-center py-2 l2-height border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L2:</span> <span className="text-xl">4/6</span>
                </div>
                <div className="flex items-center py-2 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L3:</span> <span className="text-xl">5/8</span>
                </div>
              </div>
            </td>
            <td className="border border-gray-400 px-6 py-4 text-center font-medium l2-height">L2 (Above Average)</td>
            <td className="border border-gray-400 px-6 py-4 text-lg">
            You’ve displayed strong verbal reasoning abilities, understanding complex texts and articulating ideas clearly. Continue to expand your vocabulary and comprehension to stay sharp.
            </td>
          </tr>

          {/* Logical Aptitude */}
          <tr className="odd:bg-gray-100">
            <td className="border border-gray-400 px-6 py-4 font-medium">Logical Aptitude</td>
            <td className="border border-gray-400 px-6 py-4 text-base text-center">
              <div className="flex flex-col">
                <div className="flex items-center py-2 border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L1:</span> <span className="text-xl">0/0</span>
                </div>
                <div className="flex items-center py-2 l2-height border-b border-gray-300 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L2:</span> <span className="text-xl">4/6</span>
                </div>
                <div className="flex items-center py-2 -mx-6 px-6">
                  <span className="font-bold text-xl w-12 mr-2">L3:</span> <span className="text-xl">0/12</span>
                </div>
              </div>
            </td>
            <td className="border border-gray-400 px-6 py-4 text-center font-medium l2-height">L1 (Below Average)</td>
            <td className="border border-gray-400 px-6 py-4 text-lg">
            Your performance indicates that there’s room for improvement in understanding and applying quantitative concepts. With more practice, you can strengthen your skills in this area.
            </td>
          </tr>
        </tbody>

        {/* Total Section */}
        <tfoot className="bg-gray-100 border-t border-gray-400">
          <tr>
            <td className="border border-gray-400 px-6 py-4 font-semibold text-lg">Total</td>
            <td className="border border-gray-400 px-6 py-4 text-xl font-semibold pl-8">21/50</td>
            <td className="border border-gray-400 px-6 py-4 text-center text-lg font-semibold">L2 (Above Average)</td>
            <td className="border border-gray-400 px-6 py-4 text-lg">
              You have a strong foundation and are performing well across all categories. Keep up the great work and aim for continuous improvement to achieve even higher levels of performance.
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
