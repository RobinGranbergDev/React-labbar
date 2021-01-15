import Booklist from "./components/Booklist";
import Navbar from "./navigation/Navbar";
import React, {useState} from 'react'


function App() {

    const [books, setBooks] = useState([
    {
      id: 1,
      img: "https://image.bokus.com/images/9781780943206_200x_spartacus",
      title: "Spartacus",
      author: "Robin Granberg",
    },
        {
      id: 2,
      img: "https://image.bokus.com/images/9781780943206_200x_spartacus",
      title: "Spartacus",
      author: "Mathilda Swärd",
    },
    {
      id: 3,
      img: "https://image.bokus.com/images/9781780943206_200x_spartacus",
      title: "Spartacus",
      author: "Camilla Granberg",
    },
  ]);

  return (
    <div>
      <Navbar />
      <Booklist books={books}/>
    </div>
  );
}

export default App;
