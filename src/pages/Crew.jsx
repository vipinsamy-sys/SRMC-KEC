import "../styles/Crew.css";

export default function Crew(){

const members=[
{
name:"Club President",
role:"Student Coordinator",
},
{
name:"Vice President",
role:"Event Management",
},
{
name:"Faculty Coordinator",
role:"Department of Mathematics",
},
{
name:"Technical Team",
role:"Web & Media",
}
];


return(

<section className="crew-page">


<div className="crew-header">

<p>
OUR TEAM
</p>

<h1>
Meet The Crew
</h1>

<span>
The people behind SRMC activities and innovations
</span>

</div>



<div className="crew-grid">


{
members.map((member,index)=>(

<div className="member-card" key={index}>


<div className="member-avatar">
SR
</div>


<h2>
{member.name}
</h2>


<p>
{member.role}
</p>


</div>

))
}


</div>


</section>

)

}