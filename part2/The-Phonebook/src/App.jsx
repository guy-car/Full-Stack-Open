import { useState, useEffect } from 'react'
import Search from "./components/Search"
import Form from "./components/Form"
import Content from "./components/Content"
import personsService from "./services/persons"

const App = () => {

  //// state values
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState("")
  const [newFilter, setNewFilter] = useState("")

  //// Set state to server data on first render
  useEffect( () => {
    console.log("get initialPersons");
    personsService.getAll()
    .then(initialPersons => setPersons(initialPersons))
  }, [])
  

  //// When user clicks "add" run the below
  const addPerson = (event) => {
    event.preventDefault()
    console.log("add new person request received")
    // searches database to see if newPerson already exists
    // if true display alert
    const newPerson = persons.find(person => person.name === newName)
    if (newPerson && newPerson.number === newPhone) {
      alert(`${newName} is already in phonebook`)
      return 
    }
    // check if newPerson is an existing name with a different number
    // if true ask user to confirm replacing old with new number
    if (newPerson && newPerson.number !== newPhone) {
      if (window.confirm(`${newName} is already in the phonebook, replace the old number with the new one?`)) {
      
      // prepares person object for update
        const personToUpdate = {
        ...newPerson,
        number: newPhone
      }
      console.log(`entering new number ${personToUpdate.number} for ${personToUpdate.name}`)
      personsService.update(newPerson.id, personToUpdate)
      .then(returnedPerson => {
        setPersons(persons.map(person =>
          person.id === returnedPerson.id ? returnedPerson : person
        ))
        setNewName("")
        setNewPhone("")
        console.log("input field has been reset")
      })
      .catch(error => {
        console.error("error updating person", error)
      })
      return
    }}
    // if person is new, add info to person state
    if (!newPerson) {
    console.log("person is indeed new")
    const personObject= {
      name: newName,
      number: newPhone? newPhone : "(number unknown)",
    }
    console.log("personObject created: ", personObject)
    personsService.create(personObject)
    .then(returnedPerson => {
       setPersons(persons.concat(returnedPerson))
       console.log("new person has been added to phonebook")
       setNewName("")
       setNewPhone("")
       console.log("input field has been reset")
    })
    }
  }

  //// Run the below when user clicks "delete"
  const handleDelete = (id) => {
    const personToDelete = persons.find(person => person.id === id)

    if (window.confirm(`Delete ${personToDelete.name}?`)) {

      personsService.remove(id)
      .then(()=> {
        setPersons(persons.filter(person => person.id !== id))
      })
      .catch(error => {
        console.error("error deleteting person", error)
      })
    }
    
  }
  
  //// Updates newName in real time when user types in name: field
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  //// Updates newPhone in real time when user types in number: field
  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  //// Updates newFilter in real time when user types in filter: field
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    
  }

  //////// App.jsx return starts below
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
      <Content persons={persons} newFilter={newFilter} handleDelete={handleDelete}/>
    </div>
  )
}

export default App