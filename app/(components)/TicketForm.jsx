"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ticket}) => {

    //default data
    const defaultTicketData ={
        title: "",
        description: "",
        priority: 1,
        progress: 0,
        status : "Incomplete",
        category: "Category One",
    };

    //Edit mode
    const EDITMODE =ticket._id === "new" ? false : true
    if(EDITMODE){
        defaultTicketData["title"] =ticket.title
        defaultTicketData["description"] =ticket.description
        defaultTicketData["priority"] =ticket.priority
        defaultTicketData["progress"] =ticket.progress
        defaultTicketData["status"] =ticket.status
        defaultTicketData["category"] =ticket.category
    }

    const router =useRouter()
    const [formData, setFormData] =useState(defaultTicketData);

    const handleChange =(e)=> {
        const value =e.target.value;
        const name =e.target.name;
    
        setFormData((prevState) => ({
            ...prevState,
            [name] : value,
        }))
    }

    const handleSubmit =async(e)=>{
        e.preventDefault();

        if(EDITMODE){
            const res = await fetch(`/api/Tickets/${ticket._id}`, {
                method: "PUT",
                body: JSON.stringify({formData}),
                "content-type": "application/json"
            })
    
            if(!res.ok){
                throw new Error("Failed to update ticket.")
            }
        }else{
            const res = await fetch("/api/Tickets", {
                method: "POST",
                body: JSON.stringify({formData}),
                "content-type": "application/json"
            })
    
            if(!res.ok){
                throw new Error("Failed to create a new ticket.")
            }
        }

        router.refresh();
        router.push("/");
    }

    return(
    <div className="flex justify-center ">
        <form className="flex flex-col gap-2 w-1/2 text-sm" method="post" onSubmit={handleSubmit}>

            <h1 className="uppercase font-bold text-xl">{EDITMODE? "Update your Ticket" : "Create your Ticket"}</h1>
            <hr className=""/>

            <label>Title</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.title}
            />

            <label>Description</label>
            <textarea
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.description}
                rows="5"
            />

            <label>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Category One">Category One</option>
                <option value="Category Two">Category Two</option>
                <option value="Category Three">Category Three</option>
            </select>

            <label>Priority</label>
            <div>
                <input
                    id="priority-1"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={1}
                    checked={formData.priority == 1}
                />
                <label>1</label>

                <input
                    id="priority-2"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={2}
                    checked={formData.priority == 2}
                />
                <label>2</label>

                <input
                    id="priority-3"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={3}
                    checked={formData.priority == 3}
                />
                <label>3</label>

                <input
                    id="priority-4"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={4}
                    checked={formData.priority == 4}
                />
                <label>4</label>

                <input
                    id="priority-5"
                    name="priority"
                    type="radio"
                    onChange={handleChange}
                    value={5}
                    checked={formData.priority == 5}
                />
                <label>5</label>
            </div>

            <label>Progress</label>
            <input 
                id="progress"
                name="progress"
                type="range"
                value={formData.progress}
                min="0"
                max="100"
                onChange={handleChange}
            />

            <label>Status</label>
            <select 
                name="status"
                value={formData.status}
                onChange={handleChange}>
                    <option value="incomplete">Incomplete</option>
                    <option value="complete">Complete</option>
                    <option value="draft">Draft</option>
            </select>

            <input type="submit" className="btn" value={EDITMODE? "Update Ticket" : "Create Ticket"}/> 

        </form>
    </div>
  )
}

export default TicketForm