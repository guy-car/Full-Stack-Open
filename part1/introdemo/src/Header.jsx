const Header = (props) => {
    console.log("Header props are", props)
    return (<h1>{props.course.name}</h1>)
}
export default Header