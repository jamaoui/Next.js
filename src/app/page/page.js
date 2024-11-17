import {Suspense} from "react";

async function getPosts() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
        cache: 'no-store',
    });
    await new Promise(resolve => setTimeout(resolve, 3000));

    return await res.json();
}

async function getUsers() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        cache: 'no-store',
    });
    await new Promise(resolve => setTimeout(resolve, 3000));

    return await res.json();
}

async function Posts() {
    const posts = await getPosts();
    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

async function Users() {
    const users = await getUsers();
    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default function Page() {
    return (
        <div className={'container'}>
            <Suspense fallback={"Loading posts..."}>
                <div className={'border-4 p-3 bg-gray-50'}>
                    <Posts/>
                </div>
            </Suspense>
            <Suspense fallback={"Loading users..."}>
                <div className={'border-4 p-3 bg-gray-400'}>
                    <Users/>
                </div>
            </Suspense>
        </div>
    );
}