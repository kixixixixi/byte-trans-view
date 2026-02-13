import "./reset.css"

export const metadata = {
  title: "バイト変換早見表",
  description: "2進数・10進数・16進数を変換してバイトごとに分けて早見できる",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ja">
      <body>
        <header
          style={{
            backgroundColor: "#333",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            padding: ".5rem 1rem",
            position: "relative",
          }}
        >
          <h1
            style={{
              fontSize: "1rem",
              margin: 0,
            }}
          >
            バイト変換早見表
          </h1>
        </header>
        <main
          style={{
            alignItems: "center",
            background: "#222",
            display: "flex",
            justifyContent: "center",
            minHeight: "calc(100dvh - 5.625rem)",
            padding: "1rem",
          }}
        >
          <section
            style={{
              maxWidth: "64rem",
              width: "100%",
            }}
          >
            {children}
          </section>
        </main>
        <footer
          style={{
            backgroundColor: "#333",
            boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
            fontSize: ".75rem",
            padding: "1rem",
          }}
        >
          <p>&copy; kixixixixi</p>
        </footer>
      </body>
    </html>
  )
}
export default RootLayout
