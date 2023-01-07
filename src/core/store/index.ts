import { ThunkDispatch, Action, Store } from "@reduxjs/toolkit"
import type { ShifumiGateway } from "src/core/gateways/shifumiGateway"
import type { PlayShapeState } from "src/core/usecases/playShape/reducer"
import type { CountScoreState } from "src/core/usecases/countScore/reducer"

export interface AppState {
  playShape: PlayShapeState
  countScore: CountScoreState
}

export interface Dependencies {
  shifumiGateway: ShifumiGateway
}

interface AppThunkExtraArg {
  dependencies: Partial<Dependencies>
}

export type AppDispatch = ThunkDispatch<AppState, AppThunkExtraArg, Action>

export type AppStore = Store<AppState> & {
  dispatch: AppDispatch
}

export type AppThunkConfig = {
  state: AppState
  dispatch: AppDispatch
  extra: AppThunkExtraArg
  /** type to be passed into `rejectWithValue`'s first argument that will end up on `rejectedAction.payload` */
  // rejectValue?: unknown
  /** return type of the `serializeError` option callback */
  // serializedErrorType?: unknown
  /** type to be returned from the `getPendingMeta` option callback & merged into `pendingAction.meta` */
  // pendingMeta?: unknown
  /** type to be passed into the second argument of `fulfillWithValue` to finally be merged into `fulfilledAction.meta` */
  // fulfilledMeta?: unknown
  /** type to be passed into the second argument of `rejectWithValue` to finally be merged into `rejectedAction.meta` */
  // rejectedMeta?: unknown
}
