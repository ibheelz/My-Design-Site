import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Abiola's Designs",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: '#000', minHeight: '100vh' }}>{children}</body>
    </html>
  )
}
