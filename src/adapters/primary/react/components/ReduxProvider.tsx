import { ReactNode } from "react"
import { Provider } from "react-redux"
import { configureAppStore } from "src/core/store/configureAppStore"
import { InMemoryRandomShifumiGateway } from "src/adapters/secondary/gateways/inMemoryRandomShifumiGateway"

const store = configureAppStore({
  shifumiGateway: new InMemoryRandomShifumiGateway(),
})

export default function ReduxProvider(props: { children: ReactNode }) {
  return <Provider store={store}>{props.children}</Provider>
}
