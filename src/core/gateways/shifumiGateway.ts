import type { Shape } from "src/core/models/shape"

export interface ShifumiGateway {
  play: () => Promise<Shape>
}
