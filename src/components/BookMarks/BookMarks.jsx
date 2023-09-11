import PropTypes from 'prop-types'
import BookMark from './BookMark'

const BookMarks = ({ bookmarks, readingTime}) => {
    console.log(bookmarks)
    return (
        <div className="md:w-1/3 bg-gray-400 px-2 pt-3 mt-2">
            <div>
                <h3 className='text-4xl'>Reading Time: {readingTime}</h3>
            </div>
            <h2 className="text-3xl">BookMarks: {bookmarks.length}</h2>
            <div className='mt-8'>
                {
                    bookmarks.map(bookmark => <BookMark key={bookmark.id} bookmark={bookmark}></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}

export default BookMarks;