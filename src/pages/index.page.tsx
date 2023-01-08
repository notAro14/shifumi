import Card from "src/adapters/primary/react/components/Card"
import Score from "src/adapters/primary/react/components/Score"
import RockPaperScissors from "src/adapters/primary/react/components/RockPaperScissors"
import History from "src/adapters/primary/react/components/History"

export default function Page() {
  return (
    <Card>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--size-3)",
        }}
      >
        <Score />
        <RockPaperScissors />
        <hr />
        <History />
      </div>
    </Card>
  )
}
