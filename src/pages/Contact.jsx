import "../styles/Contact.css";

export default function Contact(){

return(

<section className="contact-page">


<div className="contact-header">

<p>
GET IN TOUCH
</p>

<h1>
Contact SRMC
</h1>

<span>
Have questions or want to be part of our mathematical journey?
</span>

</div>
<div className="contact-container">


<div className="contact-info">
<div className="info-card">

<h3>
📍 Location
</h3>

<p>
Department of Mathematics,
<br/>
Science & Humanities Block,
Kongu Engineering College
</p>
</div>
<div className="info-card">
<h3>
✉ Email
</h3>
<p>
srmc@kongu.edu
</p>
</div>
<div className="info-card">

<h3>
🌐 Connect
</h3>

<p>
Instagram • LinkedIn • YouTube
</p>

</div>


</div>





<div className="contact-form">


<h2>
Send Message
</h2>


<input 
type="text"
placeholder="Your Name"
/>


<input 
type="email"
placeholder="Email Address"
/>


<input 
type="text"
placeholder="Subject"
/>


<textarea
placeholder="Your Message"
/>



<button>
Send Message
</button>



</div>



</div>



</section>

)

}