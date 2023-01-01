import { Player } from "src/core-logic/usecases/player"

export interface PlayerGateway {
  retrievePlayers(): Promise<Player[]>
}
