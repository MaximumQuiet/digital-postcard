import './globals.css'


export const metadata = {
  title: 'Santa is saying...',
  description: 'A digital postcard!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
