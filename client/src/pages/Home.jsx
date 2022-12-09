// Dependencies
import { useEffect, useState } from "react";

// Components
import PostDetails from "../components/PostDetails";
import PostForm from "../components/PostForm";


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
        <div className="home w-11/12 max-w-2xl">
            <div className="posts ">
                {posts && posts.map((post) => (
                    <PostDetails key={post._id} post={post} />
                ))}
            </div>
            <PostForm />
        </div>
    );
}

export default Home;
