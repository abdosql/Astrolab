import './globals.css'

export const metadata = {
  title: 'Astrolab - Real-time Observatory',
  description: 'Your real-time observatory for tracking and exploring asteroids, comets, and Near-Earth Objects (NEOs)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}
