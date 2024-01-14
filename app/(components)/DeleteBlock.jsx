"use client";

import {XCircleIcon} from '@heroicons/react/24/solid'
import { useRouter } from 'next/navigation';

const DeleteBlock = ({id}) => {

  const router =useRouter();

  const deleteTicket =async() => {
    const res= await fetch(`http://localhost:3000/api/Tickets/${id}` , {
      method:"DELETE"
    });

    if(res.ok){
      router.refresh();
      router.push("/");
    }
  }

  return (
    <XCircleIcon onClick={deleteTicket} className='text-yellow-400 hover:text-red-400 cursor-pointer  w-6 h-6'/>
  )
}

export default DeleteBlock