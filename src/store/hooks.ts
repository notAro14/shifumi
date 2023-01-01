import {
  useDispatch as _useDispatch,
  useSelector as _useSelector,
} from "react-redux"
import type { TypedUseSelectorHook } from "react-redux"

import type { RootState, AppDispatch } from "src/store"

export const useDispatch: () => AppDispatch = _useDispatch
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
