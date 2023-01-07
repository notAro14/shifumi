import type { Shape } from "src/core/models/shape"
import { playersShapesFormed } from "./actions"
import { createAppAsyncThunk } from "src/core/store/createAppAsyncThunk"

export const playShape = createAppAsyncThunk<void, Shape>(
  "shapes/playShape",
  async (playerShape, { dispatch, extra }) => {
    const computerShape =
      (await extra.dependencies.shifumiGateway?.play()) as Shape
    dispatch(playersShapesFormed({ playerShape, computerShape }))
  }
)
