import Details from "../components/Details"
import Seperator from "../ui/Seperator"
import ThankYou from "../components/ThankYou"
import ResultOverview from "../components/ResultOverview"
import "../tailwind.css"

export default function PageOne() {
  return (
    <>
        <Details />
        <Seperator />
        <ThankYou />
        <Seperator />
        <div className="print-page">
        <ResultOverview />
        </div>
    </>
  )
}
