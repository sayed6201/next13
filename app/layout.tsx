import '../styles/globals.css'
import Header from './Header'
//layout will work as new _app.tsx

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      {/* children will push pages.tsx */}
      <body className=''>
        <Header />
        <div className='p-10'>
        {children}
        </div>
      </body>
    </html>
  )
}
