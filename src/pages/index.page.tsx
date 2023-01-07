import Card from "src/adapters/primary/react/components/Card"
import Score from "src/adapters/primary/react/components/Score"
import RockPaperScissors from "src/adapters/primary/react/components/RockPaperScissors"

export default function Page() {
  return (
    <Card>
      <Score />
      <RockPaperScissors />
    </Card>
  )
}
