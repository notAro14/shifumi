import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"
import type { AppState } from "src/core/store/appState"
import type { Dependencies } from "src/core/store/dependencies"
import { playersShapesFormed } from "./actions"

export const playShape = createAsyncThunk<
  void,
  Shape,
  {
    state: AppState
    extra: Partial<Dependencies>
  }
>("shapes/playShape", async (playerShape, { dispatch, extra }) => {
  const computerShape = (await extra.shifumiGateway?.play()) as Shape
  dispatch(playersShapesFormed({ playerShape, computerShape }))
})
