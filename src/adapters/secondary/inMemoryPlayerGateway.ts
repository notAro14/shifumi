import type { PlayerGateway } from "src/core-logic/gateways/playerGateway"
import { Player } from "src/core-logic/usecases/player"

export class InMemoryPlayerGateway implements PlayerGateway {
  private _players: null | Player[] = null

  constructor(players: Player[]) {
    this._players = players
  }

  async retrievePlayers() {
    return this._players as Player[]
  }
}
