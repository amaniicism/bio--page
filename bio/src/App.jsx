function Introduction(props) {
  return (
    <div class ="myDiv">
      <h2>Hi, I'm {props.name} </h2>
      <p>{props.bio}</p>
    </div>
  );
}

function Skills (props) {
  return (
    <div>
      <h2>My {props.title} </h2>
      <p>{props.skills}</p>
    </div>
  );
}

function AboutMe () {
  return(
    <div>
      <h2>About Me</h2>
      <p>
        I am a first year student pursuing Journalism and Mass Communication. I
        love making music and creating films. Follow me on here:
        <a href="https://www.instagram.com/">My Instagram</a>
      </p>
<img 
      src="./amani.jpg" alt="Image showing face" />

      <h2>A few things I do</h2>
      <ul class="hobbies-list">
        <li class="chip">Code</li>
        <li class="chip">Theatre</li>
        <li class="chip">Music</li>
      </ul>
    </div>
  );
}
function App() {
  return (
    <div class ="body">
      <h1>My Bio Page</h1>
      <Introduction name="Amani" bio= "A really tall guy.🙂"/>
  
  <Skills
      title = "Skills"
      skills =" HTML, CSS, JavaScript "/>

      <AboutMe/>

     
    </div>
  );
}


export default App;
