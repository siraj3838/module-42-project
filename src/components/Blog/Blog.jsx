import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookMark, markAsRead}) => {
    const {title, cover, reading_time, author_img, author, posted_date, hashtags} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between my-5'>
                <div className='flex items-center gap-6'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookMark(blog)} className='ml-4 text-xl text-red-600'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl font-bold">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>markAsRead(reading_time)} className='text-red-800 list-none font-bold underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func.isRequired,
    markAsRead: PropTypes.func.isRequired
}
export default Blog;