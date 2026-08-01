import "../styles/Quiz.css";

export default function Quiz(){

const categories=[
    "Number Theory",
    "Logic Puzzles",
    "Calculus",
    "General Mathematics"
];


return(

<section className="quiz-page">


<div className="quiz-header">

<p>
SRMC CHALLENGE
</p>

<h1>
Mathematics Quiz
</h1>

<span>
Challenge your knowledge and improve your problem solving skills
</span>

</div>



<div className="quiz-container">


<div className="quiz-card">


<div className="quiz-icon">
?
</div>


<h2>
Ready to Test Yourself?
</h2>


<p>
Participate in exciting mathematical quizzes
and compete with other students.
</p>


<button>
Start Quiz
</button>


</div>




<div className="category-section">


<h2>
Quiz Categories
</h2>


<div className="category-grid">


{
categories.map((item,index)=>(

<div className="category-card" key={index}>

<h3>
{item}
</h3>

<p>
10 Questions
</p>

</div>

))
}


</div>


</div>



</div>



<div className="leaderboard">


<h2>
Top Performers
</h2>


<div className="rank-card">

<span>
🥇
</span>

<p>
Mathematics Champion
</p>

<strong>
98%
</strong>

</div>


<div className="rank-card">

<span>
🥈
</span>

<p>
Problem Solver
</p>

<strong>
94%
</strong>

</div>


</div>



</section>

)

}