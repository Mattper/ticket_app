import { Inter, Poppins } from 'next/font/google'
import './globals.css'

//Components
import Navbar from './(components)/Navbar'
import Footer from './(components)/Footer'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Ticket App',
  description: 'Created By Mattper',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className='flex flex-col h-screen max-h-screen'>
          <Navbar/>
          <div className='flex-grow overflow-y-auto bg-page text-default-text'>
            {children}
          </div>
          <Footer/>
          
        </div>
      </body>
    </html>
  )
}
