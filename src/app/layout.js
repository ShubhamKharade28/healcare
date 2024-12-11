
import './globals.css'


export const metadata = {
  title: 'HealCare',
  description: 'healcare pict',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
