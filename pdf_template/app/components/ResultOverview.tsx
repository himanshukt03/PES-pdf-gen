export default function ResultOverview() {
  return (
    <div className="text-2xl">
      <div className="space-y-6">
        <h1 className="font-bold text-4xl">SURVEY OVERVIEW!</h1>
        <p className="text-2xl">
          Your behavioural assessment showcases your general temperament and
          natural tendencies which will help you understand what environments
          you will thrive in, followed by aptitude and coding assessments.
        </p>
      </div>

      <div className="py-6">
        <div className="py-6 space-y-16">
          {/* 1 */}
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">1. DISC PERSONALITY TEST</h1>
            <p className="text-2xl">
              It helps you understand how you naturally respond to situations, especially when working on projects, 
              innovation, or handling uncertainty. It also helps you figure out the kind of people you need on your
              team to balance and complement your strengths.
            </p>
          </div>
          {/* 2 */}
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">2. APTITUDE ASSESSMENT</h1>
            <p className="text-2xl">
              This assessment is designed to assess your verbal, quantitative as well as 
              logical aptitude with varying levels of complexity. This will help you understand and 
              improve on your aptitude.
            </p>
          </div>
          {/* 3 */}
          <div className="space-y-3">
            <h1 className="font-bold text-3xl">3. KNOWLEDGE ASSESSMENT</h1>
            <p className="text-2xl">
              This assessment is designed to assess your verbal, quantitative as well as 
              logical aptitude with varying levels of complexity. 
              This will help you understand and improve on your aptitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
