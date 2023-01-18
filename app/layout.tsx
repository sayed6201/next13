import '../styles/globals.css'
import Header from './Header'


//layout will work as new _app.tsx
//layout will get showen
//layout will get rendered you will have to pass children here
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      
      {/* children is all the other pages (page.tsx, todos, search) */}
      <body className=''>
        <Header />
        <div className='p-10'>
        {children}
        </div>
      </body>
    </html>
  )
}
