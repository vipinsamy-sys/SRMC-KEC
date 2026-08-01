import "../styles/Gallery.css";

export default function Gallery(){

const images=[
"/images/infinyx'25.jpeg",
"/images/vedic_maths'26.jpeg",
"/images/gallery3.jpg",
"/images/gallery4.jpg",
"/images/gallery5.jpg",
"/images/gallery6.jpg"
];


return(

<section className="gallery-page">


<div className="gallery-header">

<p>
MEMORIES
</p>

<h1>
Gallery
</h1>

<span>
Moments captured from SRMC events and activities
</span>

</div>



<div className="gallery-grid">


{
images.map((image,index)=>(

<div className="gallery-card" key={index}>

<img 
src={image}
alt="SRMC Event"
/>

</div>

))
}


</div>


</section>

)

}