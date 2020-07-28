import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=({name, clickHandler})=><button onClick={clickHandler}>{name}</button>

const Votes=({votes})=><>has {votes} votes</>

const Display=({display})=><>{display}</>

const Anecdote=({anecdote,heading,vote})=>{
    return(
    <div>
    <Heading heading={heading} />
    <p>
    <Display display={anecdote}/>
    <br/>
    <Votes votes={vote} />
    </p>
    </div>
    );
}

const Heading=({heading})=><h2>{heading}</h2>

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const length=props.anecdotes.length;
  const [votes, setVotes]=useState(new Array(length).fill(0));
  const [maxVotes, setMaxVotes]=useState(0);

  const randomGenerator=()=>{
  let value=Math.floor(Math.random()*length);
  setSelected(value);
  }

  const vote=()=>{
    let copy=[...votes];
    copy[selected]+=1;
    setVotes(copy);
    if(copy[selected]>copy[maxVotes])
        setMaxVotes(selected)
  }
  return (
    <>

      <Anecdote anecdote={props.anecdotes[selected]} heading="Anecdote of the day" vote={votes[selected]} />
       <div>
       <Button name="vote" clickHandler={vote}/>
       <Button name="next anecdote" clickHandler={randomGenerator}/>
       </div>
       <Anecdote anecdote={props.anecdotes[maxVotes]} heading="Anecdote with most votes" vote={votes[maxVotes]} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)