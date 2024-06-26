import PropTypes from 'prop-types';
import { PiBookmarkSimpleFill } from "react-icons/pi";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { Id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
    console.log(Id)
    return (
        <div className='mb-8 space-y-4'>
            <img className='w-full mb-8 mt-3 h-96 rounded-md' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='h-14 w-14 rounded-full' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark(blog)}
                        className='ml-2 text-2xl text-red-600'
                    >
                        <PiBookmarkSimpleFill />
                    </button>
                </div>
            </div>
            <h2 className="4xl">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(Id, reading_time)}
                className='text-purple-800 font-bold underline'
            >
                Mark As Read
            </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}

export default Blog;