

import Post from "@/models/Post";
import connect from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

interface IParams {
    id: string;
}

export const GET = async (request: Request, {params} : {params: IParams}) => {
    
    const {id} = params;

    try {
        await connect();

        const post: any = await Post.findById(id);
        
        return new NextResponse(JSON.stringify(post), {status: 200});
    
    } catch(error) {
        return new NextResponse("Database Error!", {status: 500});
    }
    
}