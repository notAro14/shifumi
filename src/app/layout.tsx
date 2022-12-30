import "src/styles/reset.css"
import Link from "next/link"
import Providers from "src/context"

function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", listStyleType: "none", gap: "1rem" }}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </nav>
  )
}
interface Props {
  children: React.ReactNode
}
export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
