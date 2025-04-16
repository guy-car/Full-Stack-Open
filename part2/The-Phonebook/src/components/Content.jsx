const Content = ({persons, newFilter, handleDelete}) => {
    return (
            // Defines Persons component to render on page
            // receives persons as prop
            // maps over persons
            // for each person a ternary evaluates if person.name includes newFilter
            // if so person will be displayed
            // if not person will not be displayed
      <>
        {persons.map(person =>
          person.name.toLowerCase().includes(newFilter)?
          <div key={person.name}>
            <span>{person.name} {person.number}</span> 
            <button onClick={()=>handleDelete(person.id)}>delete</button>
          </div>
          : ""
        )}
      </>
    )
  }

export default Content