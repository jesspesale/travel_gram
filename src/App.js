import './App.css';
import Post from './components/Post/Post';

function App() {
  return (
    <div className="app">
      <div className="app_navbar">
        <p>TravelGram</p>

      </div>

      {/* NavBar/ Header */}
      <Post/>
    </div>
  )
}

export default App;
