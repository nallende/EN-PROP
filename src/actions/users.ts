'use server';
import prisma from "@/config/db";
import { currentUser } from "@clerk/nextjs";


export const GetCurrentUserFromMongoDB = async () => {
    try {
        //check if user already exists with clerk userid property

        const clerkUser = await currentUser();
        let mongoUser = null;

        mongoUser = await prisma.user.findUnique({
            where: {
                clerkUserId: clerkUser?.id,

            },
        });
        if (mongoUser) {
            return {
                data: mongoUser
            };
        }

        //if user doesn't exist create new user
        let username = clerkUser?.username
        if (!username) {
            username = clerkUser?.firstName + " " + clerkUser?.lastName;

        }

        username = username.replace("null", "");


        const newUser: any = {
            clerkUserId: clerkUser?.id,
            username,
            email: clerkUser?.emailAddresses[0].emailAddress,
            profilePic: clerkUser?.imageUrl,
        };
        const result = await prisma.user.create({
            data: newUser,
        })
        return {
            data: result,
        }

    } catch (error: any) {
        return {
            error: error.message
        }
    }
}