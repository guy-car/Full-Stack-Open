import { useState, useEffect } from 'react'
import Search from "./components/Search"
import Form from "./components/Form"
import Content from "./components/Content"
import axios from 'axios'

const App = () => {

  // state values
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [newFilter, setNewFilter] = useState("")

  // Server data
  useEffect( () => {
    console.log("effect ran");
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled")
        setPersons(response.data)
      })
  }, [])
  console.log("content of persons state: ", persons)


  // When user clicks "add" run the below
  const addPerson = (event) => {
    event.preventDefault()

    // checks if name entered already exists in persons state
    // if true display alert
    const isAlreadyExisting = persons.some(person => person.name === newName)
    if (isAlreadyExisting) {
      alert(`${newName} is already added to phonebook`)
      return 
    }

    // if person is new, add info to person state
    const personObject= {
      name: newName,
      number: newPhone? newPhone : "(number unknown)",
      id: String(persons.length +1)
    }
    setPersons(persons.concat(personObject))
    setNewName("")
    setNewPhone("")
  }
  
  // Updates newName in real time when user types in name: field
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // Updates newPhone in real time when user types in number: field
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  // Updates newFilter in real time when user types in filter: field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    
  }

  // App.jsx return starts below
  return (
    <div>
      <Search newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new person</h2>
      <Form 
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange} 
        newPhone={newPhone}
        handlePhoneChange={handlePhoneChange}
      />
      <h2>Numbers</h2>
      <Content persons={persons} newFilter={newFilter}/>
    </div>
  )
}

export default App