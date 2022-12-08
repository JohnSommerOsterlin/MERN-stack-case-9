import { useEffect, useState } from "react";


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
                    <p key={post._id}>{post.username}</p>
                ))}
            </div>
        </div>
    );
}

export default Home;
