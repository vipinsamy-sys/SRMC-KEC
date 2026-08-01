import "../styles/Events.css";

export default function Events(){

const events = [
{
year:"2026",
title:"Mathematics Quiz Challenge",
type:"Competition",
desc:"A platform to test logical thinking, problem solving and mathematical skills."
},

{
year:"2025",
title:"Ramanujan Day Celebration",
type:"Celebration",
desc:"Celebrating the contributions of Srinivasa Ramanujan through activities and exhibitions."
},

{
year:"2025",
title:"Mathematics Workshop",
type:"Workshop",
desc:"Interactive sessions exploring mathematical concepts and applications."
},

{
year:"2024",
title:"Puzzle Hunt",
type:"Fun Event",
desc:"A mathematical treasure hunt designed to improve analytical thinking."
}

];


return(

<section className="events-page">


<div className="events-header">

<p>
SRMC ACTIVITIES
</p>

<h1>
Events & Programs
</h1>

<span>
Where curiosity meets mathematics
</span>

</div>



<div className="timeline">


{
events.map((event,index)=>(

<div className="event-box" key={index}>


<div className="event-year">

{event.year}

</div>



<div className="event-content">


<span className="event-type">

{event.type}

</span>


<h2>
{event.title}
</h2>


<p>
{event.desc}
</p>


<button>
View Details
</button>


</div>


</div>

))
}


</div>


</section>

)

}