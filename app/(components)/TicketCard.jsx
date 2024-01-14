import Link from "next/link"
import DeleteBlock from "./DeleteBlock"
import PriorityDisplay from "./PriorityDisplay"
import ProgressDisplay from "./ProgressDisplay"
import StasusDisplay from "./StasusDisplay"


const TicketCard = ({ticket}) => {

    //format Timestamp
    const formatTimeStamp =(timestamp) => {
        const options ={
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
        };

        const date =new Date(timestamp)
        const formattedDate =date.toLocaleString("en-US", options);

        return formattedDate;
    }
    
    return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-3xl shadow-lg p-5 m-2">
        <div className="flex mb-3 items-center">
            <PriorityDisplay priority={ticket.priority}/>
            <div className="ml-auto">
                <DeleteBlock id={ticket._id}/>
            </div>
        </div>
        <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
            <h3 className="uppercase font-bold">{ticket.title}</h3>
            <hr className="h-px border-0 bg-white mb-2"/>
            <p className="whitespace-pre-wrap text-xs">
            {ticket.description}
            </p>
            <div className="flex-grow"></div>
            <div className="flex mt-2">
                <div className="flex flex-col items-center">
                    <p className="text-xs my-1">{formatTimeStamp(ticket.createdAt)}</p>
                    <ProgressDisplay progress={ticket.progress}/>
                </div> 
                <div className="ml-auto flex items-center">
                    <StasusDisplay status={ticket.status}/>
                </div>   
            </div>
        </Link>
    </div>
  )
}

export default TicketCard