import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa6";

const Blog = ({ blog, handleAddToBookmark }) => {

   const {title, cover, author, author_img,reading_time, posted_date, hashtags} = blog;
    return (
        <div className='mb-20'>
            <img className='w-1/2 rounded-xl mb-8 ' src={cover} alt="" />
            <div className='flex justify-between mb-4'>
                <div className='flex gap-6'>

                    <img className='w-10 m-1 rounded-xl p-1  ' src={author_img} alt="" />

                    <div>
                        <h3 className='text-2-xl'>
                            {author}
                        </h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div className='flex justify-between items-center'>

                    <span>{reading_time} min read</span>
                    <button 
                    onClick={() => handleAddToBookmark(blog)}
                    className='text-gray-600 ml-2 text-2xl'><FaRegBookmark /></button>

                </div>
            </div>
            <h2 className='text-3xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx)=>  <span key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};









Blog.PropTypes = {
    blog: PropTypes.object.isRequired
    // handleAddToBookmark:PropTypes.func
}
export default Blog;