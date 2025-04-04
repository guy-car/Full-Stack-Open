// App.jsx
// ------------------------------------
// This is the main container component that holds the course data
// and renders a Course component for each course in the array
import React from "react"
import Course from "./Course"


const App = () => {
  // Data structure: An array of course objects
  // Each course object has:
  // - name: string (course title)
  // - id: number (unique identifier)
  // - parts: array of part objects, each with name, exercises count, and id
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]


  return (
    <div>
      {/* Map over the courses array, creating a Course component for each course */}
      {/* Each Course receives the entire course object as a prop */}
      {/* The key prop is required by React for efficient list rendering */}
      {courses.map(course => (
        <Course key={course.id} course={course}/>
      ))}
    </div>
  )
}


export default App