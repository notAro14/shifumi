import type { ShifumiGateway } from "src/core/gateways/shifumiGateway"
import { Shape } from "src/core/models/shape"

export class InMemoryRandomShifumiGateway implements ShifumiGateway {
  private _shapes: [Shape, Shape, Shape] = ["Rock", "Paper", "Scissors"]
  async play() {
    const idx = Math.floor(Math.random() * 3)
    return this._shapes[idx]
  }
}
