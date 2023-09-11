import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='max-w-screen-xl mx-auto md:flex'>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
      </div>
    </>
  )
}

export default App
