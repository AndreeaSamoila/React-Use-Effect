import {PostItem} from "./PostItem";

export function PostList({posts}) {
    return (
        <div>
            {posts.map((post) => (
                <PostItem key={post.id} title={post.title}  body={post.body} />

            ))}
        </div>
    );
}