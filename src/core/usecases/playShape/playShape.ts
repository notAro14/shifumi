import type { Shape } from "src/core/models/shape"
import { createAppAsyncThunk } from "src/core/store/createAppAsyncThunk"

export const playShape = createAppAsyncThunk<
  { playerShape: Shape; computerShape: Shape },
  Shape
>("shapes/playShape", async (playerShape, { extra }) => {
  const computerShape =
    (await extra.dependencies.shifumiGateway?.play()) as Shape
  return { computerShape, playerShape }
})
