import React, {useState} from "react"
import './App.css';
import Post from './components/Post/Post';

function App() {

  const [posts, setPosts] = useState([
    {
      username: "jess_pesale",
      caption: "here we go",
      imgUrl: "https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
    },
    {
      username: "nrusso", 
      caption: "Lets Go!", 
      imgUrl: "https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="
    }
  ]);

  return (
    <div className="app">
      <div className="app_navbar">
        <p>TravelGram</p>

      </div>
        {
          posts.map(post => (
            <Post username={post.username} caption={post.caption} imgUrl={post.imgUrl} />
          ))
        }
        {/* <Post username="jess_pesale" caption="here we go" imgUrl="https://www.freecodecamp.org/news/content/images/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"/> */}
      {/* <Post username="nrusso" caption="Lets Go!" imgUrl="https://media.istockphoto.com/photos/young-man-arms-outstretched-by-the-sea-at-sunrise-enjoying-freedom-picture-id1285301614?b=1&k=20&m=1285301614&s=170667a&w=0&h=tDEC2-p91cZiNU5C19sVhB9L08PmaH5wIijCvRDalCI="/> */}
      {/* <Post username="torit" caption="Dope" imgUrl="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712__480.jpg"/> */}
    </div>
  )
}

export default App;
