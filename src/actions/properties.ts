'use server'

import prisma from "@/config/db";
import { revalidatePath } from "next/cache";
import { GetCurrentUserFromMongoDB } from "./users";

export const AddProperty = async (property: any) => {
    try {
       const user : any = await GetCurrentUserFromMongoDB(); 
       property.user = user.data.id;
       await prisma.property.create({
              data: property,
        }); 
        revalidatePath('/user/properties');
        return {
            data: property,
            status: 200,
            message: "Property added successfully",
        };
        } catch (error: any) {
        return {

        };
    }
}