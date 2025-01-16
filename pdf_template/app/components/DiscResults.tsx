export default function DiscResults() {
  const results = [
    { label: "STEADINESS", color: "bg-forestgreen", percentage: 35, subtext: "Stability and consistency." },
    { label: "DOMINANCE", color: "bg-firebrick", percentage: 20, subtext: "Assertive and goal-oriented." },
    { label: "INFLUENCE", color: "bg-yellow-500", percentage: 30, subtext: "Sociable and enthusiastic." },
    { label: "CONSCIENTIOUSNESS", color: "bg-tealishBlue", percentage: 15, subtext: "Analytical and detail-focused." },
  ];

  return (
    <div className="flex flex-col items-center space-y-8">
      <h1 className="font-bold text-4xl text-left w-full">YOUR RESULTS OF THE DISC PERSONALITY TEST</h1>
      <div className="flex items-start space-x-12">
        <div className="grid grid-cols-2 grid-rows-2 w-64 h-64">
          {results.map((result, index) => (
            <div
              key={index}
              className={`${result.color} flex items-center justify-center text-white font-bold text-2xl`}
            >
              {result.percentage}%
            </div>
          ))}
        </div>

        {/* Labels Section */}
        <div className="flex flex-col justify-start space-y-6">
          {results.map((result, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div
                className={`w-5 h-5 rounded-full ${result.color}`}
                aria-label={result.label}
              ></div>
              {/* Label */}
              <div className="flex flex-col">
                <p className="text-lg font-medium">{result.label}</p>
                <p className="text-base text-gray-600">{result.subtext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-bold text-3xl">
          DEEP DIVING INTO YOUR DISC PERSONALITY TEST
        </h2>
        <p className="text-lg">
          The DISC test presents a series of questions asking participants to
          select traits or behaviors that resonate most and least with them.
          Based on responses, a personalized profile is generated, highlighting
          the dominant DISC style and secondary traits. This creates a unique
          &quot;DISC Personality DNA&quot; for each person.
        </p>
        <div className="grid grid-cols-2 grid-rows-2 gap-6">
          {/* Box 1: Green */}
          <div className="bg-forestgreen flex flex-col text-white">
            <div className="p-6 flex-1">
              <h3 className="font-bold text-2xl">Key Traits:</h3>
              <p className="text-lg">
                You are supportive, reliable, and calm. You value stability and
                consistency and thrive in environments where you can build
                long-term relationships and provide steady, dependable support
                to others.
              </p>
              <h3 className="font-bold text-2xl mt-4">Strengths:</h3>
              <p className="text-lg">
                You are dependable and calm under pressure, excelling in
                maintaining long-term relationships. You are a supportive team
                player.
              </p>
            </div>
            <div className="bg-black text-white p-4 flex items-center h-40">
              <div>
                <h3 className="font-bold text-2xl">Challenges:</h3>
                <p className="text-lg">
                  You might resist change and struggle to make quick decisions
                  under pressure. You may also avoid conflict and passivity in
                  decision-making.
                </p>
              </div>
            </div>
          </div>
          {/* Box 2: Red */}
          <div className="bg-firebrick flex flex-col text-white">
            <div className="p-6 flex-1">
              <h3 className="font-bold text-2xl">Key Traits:</h3>
              <p className="text-lg">
                You are assertive, goal-oriented, and competitive. You are
                driven to achieve results and thrive in situations where quick
                decisions are needed. You don&apos;t shy away from challenges
                and are eager to take risks to get ahead.
              </p>
              <h3 className="font-bold text-2xl mt-4">Strengths:</h3>
              <p className="text-lg">
                You have strong leadership abilities and a drive to achieve
                results. You make quick decisions and take calculated risks.
              </p>
            </div>
            <div className="bg-black text-white p-4 flex items-center h-40">
              <div>
                <h3 className="font-bold text-2xl">Challenges:</h3>
                <p className="text-lg">
                  You may come across as blunt or aggressive, sometimes
                  overlooking details or others&apos; feelings. You can also be
                  impatient with slow processes or people who aren&apos;t
                  results-driven.
                </p>
              </div>
            </div>
          </div>
          {/* Box 3: Yellow */}
          <div className="bg-yellow-500 flex flex-col text-white">
            <div className="p-6 flex-1">
              <h3 className="font-bold text-2xl">Key Traits:</h3>
              <p className="text-lg">
                You are sociable, optimistic, and enthusiastic. Building
                connections and engaging with people energizes you. You enjoy
                motivating others and creating an uplifting atmosphere wherever
                you go.
              </p>
              <h3 className="font-bold text-2xl mt-4">Strengths:</h3>
              <p className="text-lg">
                You excel in communication, relationship building, and
                motivation. You have a creative and persuasive nature, making
                you an effective influencer.
              </p>
            </div>
            <div className="bg-black text-white p-4 flex items-center h-40">
              <div>
                <h3 className="font-bold text-2xl">Challenges:</h3>
                <p className="text-lg">
                  You might struggle with organization, become overly
                  optimistic, and sometimes lack follow-through on commitments.
                </p>
              </div>
            </div>
          </div>
          {/* Box 4: Blue */}
          <div className="bg-tealishBlue flex flex-col text-white">
            <div className="p-6 flex-1">
              <h3 className="font-bold text-2xl">Key Traits:</h3>
              <p className="text-lg">
                You are analytical, detail-oriented, and methodical. You thrive
                in environments where precision and accuracy are valued, and
                you enjoy tackling complex problems by breaking them down into
                manageable parts.
              </p>
              <h3 className="font-bold text-2xl mt-4">Strengths:</h3>
              <p className="text-lg">
                You are excellent at problem-solving, highly organized, and
                focused on producing high-quality work.
              </p>
            </div>
            <div className="bg-black text-white p-4 flex items-center h-40">
              <div>
                <h3 className="font-bold text-2xl">Challenges:</h3>
                <p className="text-lg">
                  You may struggle with flexibility and change and can sometimes
                  become perfectionistic or bogged down by details, losing sight
                  of the bigger picture.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
