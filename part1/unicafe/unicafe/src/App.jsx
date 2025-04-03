import { useState } from 'react'

const App = () => {

  // anecdotes
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)

  const nextAnecdote = () => setSelected(Math.floor( Math.random()*anecdotes.length))
  // console.log(selected)

  const [voteCount, setVoteCount] = useState(new Array(anecdotes.length).fill(0))
  // console.log(voteCount)

  const handleVote = () => {
    const copy = [...voteCount]; copy[selected] += 1;
    setVoteCount(copy)
    // console.log("handle vote was clicked")
  }

  // determine which anecdote is most popular

  const maxVotes = Math.max(...voteCount)
  console.log("max votes: ",maxVotes)
  const mostPopularIndex = voteCount.indexOf(maxVotes)
  console.log("most popular index: ", mostPopularIndex)
  const popularAnecdote = anecdotes[mostPopularIndex]
  console.log("most popular quote is ",popularAnecdote)

  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good +1 )
  }
  const handleNeutral = () => {
    setNeutral(neutral +1 )
  }
  const handleBad = () => {
    setBad(bad +1 )
  }

  const Statistics = ({ good, neutral, bad }) => {
    const total = good + neutral + bad;
    const average = total === 0 ? 0 : (good - bad) / total;
    const positivePercentage = total === 0 ? 0 : (good / total) * 100;
  
    if (total === 0) {
      return <p>No feedback yet</p>;
    }
  
    return (
      <div>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticLine text="Good" value={good} />
            <StatisticLine text="Neutral" value={neutral} />
            <StatisticLine text="Bad" value={bad} />
            <StatisticLine text="Total" value={total} />
            <StatisticLine text="Average" value={average.toFixed(2)} />
            <StatisticLine text="Positive" value={`${positivePercentage.toFixed(2)}%`} />
          </tbody>
        </table>
      </div>
    );
  };

  const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>
  
  const StatisticLine = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button onClick={handleGood} label="good" />
      <Button onClick={handleNeutral} label="neutral" />
      <Button onClick={handleBad} label="bad" />

      <Statistics good={good} neutral={neutral} bad={bad} />
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>Has {voteCount[selected]} votes</p>
      <br/><button onClick={handleVote} >Vote</button>
      <button onClick={nextAnecdote} >Next anecdote</button>
      <h1>Anecdote with most votes</h1>
      {popularAnecdote}
      <br/><p>has {maxVotes} votes</p>
      
    </div>
  )
}

export default App