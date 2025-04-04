const Content = ({persons, newFilter}) => {
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
          <p key={person.name}>{person.name} {person.number}</p>
          : ""
        )}
      </>
    )
  }

export default Content