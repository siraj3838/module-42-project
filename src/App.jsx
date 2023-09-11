import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0)

  const markAsRead = (time) => {
    setReadingTime(readingTime + time)
  }



  const handleAddToBookMark = (blog) =>{
    setBookmarks([...bookmarks, blog]);
  }
  return (
    <>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto md:flex'>
      <Blogs 
      markAsRead={markAsRead} 
      handleAddToBookMark={handleAddToBookMark}></Blogs>
      <BookMarks readingTime={readingTime}
      bookmarks={bookmarks}
      ></BookMarks>
      </div>
    </>
  )
}

export default App
