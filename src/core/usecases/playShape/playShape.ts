import { createAsyncThunk } from "@reduxjs/toolkit"
import type { Shape } from "src/core/models/shape"
import { playersShapesFormed } from "./actions"

export const playShape = createAsyncThunk<void, Shape>(
  "shapes/playShape",
  async (playerShape, { dispatch }) => {
    const computerShape = await Promise.resolve<Shape>("Scissors")
    dispatch(playersShapesFormed({ playerShape, computerShape }))
  }
)
