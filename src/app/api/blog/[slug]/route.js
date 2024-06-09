import { connectToDb } from "@/lib/connectToDb";
import { Post } from "@/lib/models";
import { NextResponse } from "next/server";

export const GET = async(req,{params})=>{
    try{
        const {slug} = params;
        connectToDb();

        const post = await Post.findOne({slug});
        return NextResponse.json(post)


    }catch(e){
        console.log(e);
        throw new Error("failed to fetch post!");

    }
}

export const DELETE = async(req,{params})=>{
    try{
        const {slug} = params;
        connectToDb();

        const post = await Post.findByIdAndDelete({slug});
        return NextResponse.json("Post Deleted")

    }catch(e){
        console.log(e);
        throw new Error("failed to failed post!");

    }
}