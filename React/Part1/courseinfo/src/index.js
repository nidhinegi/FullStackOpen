import React from 'react'
import ReactDOM from 'react-dom'

const Header=(props)=>{
return (<div>{props.course}</div>)
}

const Total=(prop)=>{
  const addNumbers=(total,number)=>total+number;
  const exercises=prop.parts.map(element=>element.exercises)
  const total=exercises.reduce(addNumbers);
  return (<p>
    Number of exercises {total}
    </p>)
}

const Content=(prop)=>{
  const parts=prop.parts;
   return (
    <div>
     <Part name={parts[0].name} exercise={parts[0].exercises}/>
     <Part name={parts[1].name} exercise={parts[1].exercises}/>
     <Part name={parts[2].name} exercise={parts[2].exercises}/>
    </div>
  )
}
function Part(prop){
return <p key={prop.key}>{prop.name} {prop.exercise}</p>;
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  

  return (
    <div>
     <Header course={course.name}/>
     <Content parts={course.parts}/>
     <Total parts={course.parts}/> 
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
