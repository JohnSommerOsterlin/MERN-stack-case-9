import { useEffect, useState } from "react";
import PostDetails from "../components/PostDetails";


const Home = () => {
    const [posts, setPosts] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch("http://localhost:5000/api/posts")
            const json = await response.json()

            if (response.ok) {
                setPosts(json)
            }
        }

        fetchPost()
    }, [])


    return ( 
        <div className="home">
            <div className="posts ">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export default Home;
