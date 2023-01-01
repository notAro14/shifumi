import { AppDispatch } from "src/store"

export const retrievePlayers = () => async (dispatch: AppDispatch) => {
  const players = await Promise.resolve([{ id: "123abc", name: "Jane Doe" }])
  dispatch({
    type: "PLAYERS_RETRIEVED",
    payload: players,
  })
}
