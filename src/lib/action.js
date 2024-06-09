"use server"
import { revalidatePath } from "next/cache";
import { connectToDb } from "./connectToDb";
import { Post } from "./models";

export const addPost = async (formData) =>{


    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");

   
    const {title, desc, slug, userId} = Object.fromEntries(formData);
    try{
        connectToDb();
        const newPost = new Post({title, desc, slug, userId});
        await newPost.save();
        console.log("Saved to DB");
        revalidatePath("/blog")

    }catch(error){

        console.log(error);
        


    }

   


    console.log(title, desc, slug);
}


export const deletePost = async (formData) =>{

   
    const {id} = Object.fromEntries(formData);
    try{
        connectToDb();
        await Post.findByIdAndDelete(id);
  
        console.log("Post deleted from DB");
        revalidatePath("/blog")

    }catch(error){

        console.log(error);
        


    }

   
}