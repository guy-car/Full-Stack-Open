const Part = (props) => {

    console.log("Part props are", props)
    return (
        <p>{props.part} {props.exercise}</p>
    )
}

const Content = (props) => {
    console.log("Content props are", props)

    return (
    <>
        <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises} />
        <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises} />
        <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises} />
    
    </>
    )
}
export default Content