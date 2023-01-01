import { AppThunk } from "src/store"

export const retrievePlayers = (): AppThunk => async (dispatch) => {
  const players = await Promise.resolve([{ id: "123abc", name: "Jane Doe" }])
  dispatch({
    type: "PLAYERS_RETRIEVED",
    payload: players,
  })
}
