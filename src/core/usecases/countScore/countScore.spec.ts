import { configureAppStore } from "src/core/store/configureAppStore"
import type { AppStore, AppState } from "src/core/store"
import type { Shape } from "src/core/models/shape"
import { InMemoryShifumiGateway } from "src/adapters/secondary/gateways/inMemoryShifumiGateway"
import { playShape } from "src/core/usecases/playShape"

describe("initial score", () => {
  let store: AppStore
  let initialState: AppState
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
    initialState = store.getState()
  })
  test("initially both player and computer begins with 0", () => {
    expect(store.getState()).toEqual<AppState>({
      ...initialState,
      countScore: {
        player: 0,
        computer: 0,
      },
    })
  })
})

describe("count score for first round", () => {
  let store: AppStore
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
  })

  const table: {
    computerShape: Shape
    playerShape: Shape
    score: { player: number; computer: number }
  }[] = [
    {
      playerShape: "Rock",
      computerShape: "Rock",
      score: {
        player: 1,
        computer: 1,
      },
    },
    {
      playerShape: "Paper",
      computerShape: "Rock",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Scissors",
      computerShape: "Rock",
      score: {
        player: 0,
        computer: 3,
      },
    },
    {
      playerShape: "Rock",
      computerShape: "Paper",
      score: {
        player: 0,
        computer: 3,
      },
    },
    {
      playerShape: "Scissors",
      computerShape: "Paper",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Rock",
      computerShape: "Scissors",
      score: {
        player: 3,
        computer: 0,
      },
    },
    {
      playerShape: "Paper",
      computerShape: "Scissors",
      score: {
        player: 0,
        computer: 3,
      },
    },
  ]
  test.each(table)(
    "Player($playerShape) VS Computer($computerShape), player: $score.player computer: $score.computer",
    async ({ playerShape, computerShape, score }) => {
      shifumiGateway.shape = computerShape
      await store.dispatch(playShape(playerShape))

      expect(store.getState().countScore).toEqual<AppState["countScore"]>(score)
    }
  )
})

describe("count score for 2 consecutive rounds", () => {
  let store: AppStore
  let shifumiGateway: InMemoryShifumiGateway

  beforeEach(() => {
    shifumiGateway = new InMemoryShifumiGateway()
    store = configureAppStore({ shifumiGateway })
  })

  test("Player wins 2 consecutive rounds", async () => {
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Scissors"))
    expect(store.getState().countScore).toEqual<AppState["countScore"]>({
      player: 6,
      computer: 0,
    })
  })

  test("Player loses 2 consecutive rounds", async () => {
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Paper"))
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Rock"))
    expect(store.getState().countScore).toEqual<AppState["countScore"]>({
      player: 0,
      computer: 6,
    })
  })
  test("Player gets 2 consecutive draws", async () => {
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Scissors"))
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Paper"))
    expect(store.getState().countScore).toEqual<AppState["countScore"]>({
      player: 2,
      computer: 2,
    })
  })
  test("Player loses then wins", async () => {
    shifumiGateway.shape = "Paper"
    await store.dispatch(playShape("Rock"))
    shifumiGateway.shape = "Scissors"
    await store.dispatch(playShape("Rock"))
    expect(store.getState().countScore).toEqual<AppState["countScore"]>({
      player: 3,
      computer: 3,
    })
  })
})
