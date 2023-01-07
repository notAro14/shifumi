import type { ShifumiGateway } from "src/core/gateways/shifumiGateway"
import type { Shape } from "src/core/models/shape"

export class InMemoryShifumiGateway implements ShifumiGateway {
  private _shape: Shape | null = null

  public set shape(shape: Shape) {
    this._shape = shape
  }

  async play() {
    return this._shape as Shape
  }
}
