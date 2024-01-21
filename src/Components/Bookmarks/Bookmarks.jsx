import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-8 m-5 "  > 

            <h1>Bookmarked blogs:{bookmarks.length} </h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark 
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;