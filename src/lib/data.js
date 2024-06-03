const users = [
    {id: 1, name:'John'},
    {id: 2, name:'Ketan'}
]

const posts = [
    {id: 1, title:"Post 1",body:"Hello",userId:1},
    {id: 2, title:"Post 2",body:"Hello",userId:1},
    {id: 3, title:"Post 3",body:"Hello",userId:2},
    {id: 4, title:"Post 4",body:"Hello",userId:2},
]
export const getPosts = async() =>{
    return posts;

}

export const getUser = async(id) =>{
    return users.filter(user => user.id === parseInt(id));

}
export const getPost = async(id) =>{
    return posts.filter(post => post.id ===  parseInt(id));
    
}