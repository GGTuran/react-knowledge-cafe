import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

   const {title, cover, author, author_img,reading_time, posted_date, hashtags} = blog;
    return (
        <div>
            <img className='w-2/4' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex gap-6'>

                    <img className='w-8 m-1 p-1  ' src={author_img} alt="" />

                    <div>
                        <h3 className='text-2-xl'>
                            {author}
                        </h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>

                    <span>{reading_time} min read</span>

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
}
export default Blog;