import type { AppThunkConfig } from "."
import { createAsyncThunk } from "@reduxjs/toolkit"

export const createAppAsyncThunk = createAsyncThunk.withTypes<AppThunkConfig>()
