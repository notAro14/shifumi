import { PlayerGateway } from "src/core-logic/gateways/playerGateway"
import { Player } from "src/core-logic/usecases/player"

export class JsonPlaceHolderGateway implements PlayerGateway {
  async retrievePlayers() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const players: Player[] = await response.json()
    return players
  }
}
