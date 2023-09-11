import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddToBookMark, markAsRead}) => {

    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3 mr-5 pt-3">
            <h1 className="text-4xl">Blogs: {blogs.length}</h1>
            <div className="mt-8">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleAddToBookMark={handleAddToBookMark}
                        markAsRead={markAsRead}
                    ></Blog>)
                }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookMark: PropTypes.func.isRequired,
    markAsRead: PropTypes.func.isRequired
}

export default Blogs;