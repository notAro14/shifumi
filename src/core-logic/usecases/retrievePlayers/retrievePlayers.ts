import { AppThunk } from "src/store"
import { ACTIONS } from "src/core-logic/events"

export const retrievePlayers =
  (): AppThunk => async (dispatch, _getState, dependencies) => {
    const players = await dependencies.playerGateway.retrievePlayers()
    dispatch({
      type: ACTIONS["retrievePlayers/fullfilled"],
      payload: players,
    })
  }
