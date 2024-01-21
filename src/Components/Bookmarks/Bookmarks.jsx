import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 ml-5 "  > 

            <h1>Bookmarks:{bookmarks.length} </h1>
            {
                bookmarks.map(bookmark => <Bookmark 
                key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
            
        </div>
    );
};

export default Bookmarks;