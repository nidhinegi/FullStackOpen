import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button=(props)=><button onClick={props.handleClick}>{props.name}</button>

const Headline=({description})=><h2>{description}</h2>

const Statistic=({name,count,notation})=>{
    return(
    <tr>
        <td>{name}</td>
        <td>{count}{notation}</td>
    </tr>
    );
}

const Statistics=(props)=>{
    const {good , bad, neutral}=props;
    const total=()=>good+bad+neutral;
    const average=()=>total()/3;
    const postivePercentage=()=>(good/total())*100;

       if(total()>0){
       return(<table>
            <tbody>
            <Statistic name="good" count={good} notation=""/>
            <Statistic name="neutral" count={neutral} notation=""/>
            <Statistic name="bad" count={bad} notation=""/>
            <Statistic name="all" count={total()} notation=""/>
            <Statistic name="average" count={average()} notation=""/>
            <Statistic name="positive" count={postivePercentage()} notation="%"/>
            </tbody>
        </table>)
       }

       return(<p>No feedback given</p>)

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood= ()=> setGood(good+1);
  const incrementNeutral= ()=> setNeutral(neutral+1);
  const incrementBad= ()=> setBad(bad+1);
  return (
    <>
    <Headline description="Give Feedback" />
    <div>
      <Button name="good" handleClick={incrementGood} />
      <Button name="neutral" handleClick={incrementNeutral}/>
      <Button name="bad" handleClick={incrementBad}/>
    </div>
    <Headline description="Statistics" />
    <Statistics good={good} bad={bad} neutral={neutral}/>
    </>
  )
}


ReactDOM.render(<App />,
  document.getElementById('root')
)