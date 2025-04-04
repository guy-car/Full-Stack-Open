import ReactDOM from 'react-dom/client'
import App from './App'

// This is the entry point of the application
// It renders the App component into the DOM element with id 'root' using React 18's createRoot API

ReactDOM.createRoot(document.getElementById('root')).render(<App />)