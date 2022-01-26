import { useState } from "react";
import { useRouter } from "next/router";

const Events = ({ eventsData }) => {
    const [events,setEvents] = useState(eventsData);
    const router = useRouter();
    const fetchSportsEvents = async () => {
        const response = await fetch('http://localhost:4000/events?category=sports');
        const data = await response.json();
        setEvents(data);
        router.push('/events?category=sports', undefined,{ shallow: true});
    }
    return (
        <div>
            <button onClick={fetchSportsEvents}>Sports Category</button>
           <h1>List of Events:</h1> 
           { events.map(event => 
            <div key={event.id}>
                <h1>{event.id}{event.title} | {event.category}</h1>
                <p>{event.description}</p>
                <hr/>
            </div>
            )}
        </div>
    )
}

export const getServerSideProps = async (context) => {
    const { query } = context;
    const { category } = query;
    const queryStr = category ? 'category=sports' : ''
    const response = await fetch(`http://localhost:4000/events?${queryStr}`);
    const data = await response.json();

    return {
        props:{
            eventsData: data
        }
    }
}
export default Events
