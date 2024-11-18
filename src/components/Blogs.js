import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
    const{post,loading} = useContext(AppContext);

    return(
        <div className=" mb-[70px]">
            {
                loading ? (<Spinner/>) :
                (
                    post.lenght === 0 ? (<div>No Posts found</div>) : 
                    (
                        post.map( (posts) => (
                            <div key={posts.id}>
                                <p className="text-blue-500 text-lg">{posts.title}</p>
                                <p>
                                    By <span>{posts.author}</span> on <span>{posts.category}</span>
                                </p>
                                <p>Posted on {posts.date}</p>
                                <p>{posts.content}</p>
                                <div>
                                    {
                                        posts.tags.map( (tag,idx) => {
                                            return <span className=" text-yellow-700 " key={idx}>{`#${tag}`}</span>
                                        })
                                    }
                                </div>
                            </div>
                        ))
                    )
                )
            }
        </div>
    );
}

export default Blogs;