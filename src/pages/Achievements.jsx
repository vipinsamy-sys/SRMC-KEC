import "../styles/Achievements.css";

export default function Achievements(){

const achievements=[

{
year:"2026",
title:"Inter College Mathematics Competition",
desc:"Students secured recognition through innovative mathematical solutions."
},

{
year:"2025",
title:"Best Mathematics Club Activities",
desc:"Recognized for conducting engaging mathematical events and workshops."
},

{
year:"2024",
title:"Student Innovation Awards",
desc:"Members showcased creativity through mathematical projects."
}

];


return(

<section className="achievement-page">


<div className="achievement-header">

<p>
OUR SUCCESS
</p>

<h1>
Achievements
</h1>

<span>
Celebrating excellence, creativity and mathematical curiosity
</span>

</div>



<div className="achievement-stats">


<div>
<h2>
50+
</h2>

<p>
Events Conducted
</p>

</div>



<div>
<h2>
500+
</h2>

<p>
Students Engaged
</p>

</div>



<div>
<h2>
12+
</h2>

<p>
Awards & Recognition
</p>

</div>


</div>




<div className="achievement-list">


{
achievements.map((item,index)=>(

<div className="achievement-card" key={index}>


<div className="achievement-year">

{item.year}

</div>


<div>

<h2>
{item.title}
</h2>

<p>
{item.desc}
</p>

</div>


</div>

))
}


</div>


</section>

)

}