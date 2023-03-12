import './PostCard.css'

const PostCard = () => {
    const posts = [
        { id: 1, name: "John Doe" },
        { id: 2, name: "Victor Wayne" },
        { id: 3, name: "Jane Doe" },
        { id: 3, name: "Jane Doe" },
        { id: 3, name: "Jane Doe" },
        { id: 3, name: "Jane Doe" },
      ];
      
      const feed = posts.map((post) => 
        <div className="box">
            <h2>{post.name}</h2>
            <h3>{post.id}</h3>
        </div>
      );

      return (
        <div className="feed">
          {feed}
        </div>
      );
}

export default PostCard;