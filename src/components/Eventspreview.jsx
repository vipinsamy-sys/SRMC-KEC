import "../styles/Eventspreview.css";

export default function EventPreview(){

const events=[
{
title:"Math Quiz Challenge",
tag:"Competition"
},
{
title:"Ramanujan Day Celebration",
tag:"Celebration"
},
{
title:"Mathematics Workshop",
tag:"Workshop"
}
];


return(

<section className="event-preview">

<p className="section-tag">
EVENTS
</p>

<h2>
Upcoming Highlights
</h2>


<div className="preview-grid">

{
events.map((event,index)=>(

<div className="preview-card" key={index}>

<span>
{event.tag}
</span>

<h3>
{event.title}
</h3>


<a href="/events">
View Details →
</a>


</div>

))
}


</div>


</section>

)

}