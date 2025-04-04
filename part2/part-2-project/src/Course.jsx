// Course.jsx
// ------------------------------------
// This component renders a complete course with a header, content, and total
// It receives a course object as a prop and passes appropriate data to its child components
import React from "react"


// Header component: Displays the course name in an h2 element
// Props:
// - courseName: string (the name of the course)
const Header = ({courseName}) => <h2>{courseName}</h2>


// Part component: Displays a single part with its name and exercise count
// Props:
// - partName: string (the name of the part)
// - exercises: number (the exercise count for this part)
const Part = ({partName, exercises}) => (
    <p>{partName} {exercises}</p>
)


// Content component: Renders all parts of a course
// Props:
// - parts: array (all parts of the course)
const Content = ({parts}) => {
    return (
        <div>
            {/* Map over the parts array, creating a Part component for each part */}
            {/* Each Part receives the part name and exercises count as props */}
            {parts.map(part => (
                <Part
                    key={part.id}
                    partName={part.name}
                    exercises={part.exercises}
                />
            ))}
        </div>
    )
}


// Total component: Calculates and displays the total number of exercises in the course
// Props:
// - parts: array (all parts of the course)
const Total = ({parts}) => {
    // Use reduce to calculate the sum of all exercises
    // Starting with initial value 0, add each part's exercises count to the accumulator (sum)
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return <p><b>Total of {totalExercises} exercises </b></p>
}


// Course component: The main component that combines Header, Content, and Total
// Props:
// - course: object (contains all data for a single course)
const Course = ({course}) => {
    return (
        <div>
            {/* Pass the course name to the Header component */}
            <Header courseName={course.name}/>
            
            {/* Pass the course parts array to the Content component */}
            <Content parts={course.parts}/>
            
            {/* Pass the course parts array to the Total component for calculation */}
            <Total parts={course.parts}/>
        </div>
    )
}


export default Course