import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function RootPhoenix({ children }) {
    return (
      <html lang="en">
        <body className="guts">{children}</body>
      </html>
    )
  }