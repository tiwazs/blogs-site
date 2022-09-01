import { Comment } from "@prisma/client";
import prisma from "../lib/prisma";

export interface CommentDataModel {
    content: string;
    authorId: string;
    postId: string;
}

export default class commentService {
    static async create(comment: CommentDataModel): Promise<Comment> {
        const commentCreated = await prisma.comment.create({
            data: {
                ...comment
            }
        });
        return commentCreated;
    }
    
    static async findAll(): Promise<Comment[]> {
        const comments = await prisma.comment.findMany();
        return comments;
    }

    static async findByPostId(postId: string): Promise<Comment[]> {
        const comments = await prisma.comment.findMany({
            where: {
                postId
            }
        });
        return comments;
    }

    static async findByAuthorId(authorId: string): Promise<Comment[]> {
        const comments = await prisma.comment.findMany({
            where: {
                authorId
            }
        });
        return comments;
    }
    
    static async findById(id: string): Promise<Comment | null> {
        const comment = await prisma.comment.findFirst({
            where: {
                id
            }
        });
        return comment;
    }
    
    static async update(id: string, comment: CommentDataModel): Promise<Comment | null> {
        const commentUpdated = await prisma.comment.update({
            where: {
                id
            },
            data: {
                ...comment
            }
        });
        return commentUpdated;
    }
    
    static async delete(id: string): Promise<Comment | null> {
        const commentDeleted = await prisma.comment.delete({
            where: {
                id
            }
        });
        return commentDeleted;
    }
}