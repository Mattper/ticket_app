import Link from "next/link"

import {PlusIcon, UserCircleIcon, TicketIcon} from '@heroicons/react/24/solid'

const Navbar = () => {
  return (
   <nav className="flex justify-between align-baseline bg-nav px-8 py-2">
    <div className="flex items-center space-x-4 text-white font-['Poppins']">
        <Link href="/" className="flex items-center gap-2 hover:text-yellow-400 transition duration-300">
            <TicketIcon className="w-6 h-6"/>
            <h1 className="font-bold uppercase text-xl tracking-wide">Ticketeer</h1>
        </Link>    
    </div>
    <div className="flex items-center gap-2">
        <Link href="/TicketPage/new" className="flex items-center bg-yellow-400  hover:bg-yellow-500 p-1 text-black rounded-full">
            <PlusIcon className="w-6 h-6"/>
            <h1 className="uppercase text-sm px-2 font-bold">Add new ticket</h1>
        </Link>
        <UserCircleIcon className="w-7 h-7 text-white cursor-pointer"/>
    </div>
   </nav>
  )
}

export default Navbar