'use server'

import { error } from "console";
import { createAdminClient, createSessionClient } from "../appwrite";
import email from "next-auth/providers/email";
import { cookies } from "next/headers";
import { ID } from "node-appwrite";
import { parseStringify } from "../utils";

export const signIn = async (_p0: { email: any; password: string; }) => {
    try{
         
    } catch {error} {
        console.error(' Error', error);
    }
}


export const signUp = async (userData: SignUpParams) => {
    const {email, password, firstName, lastName} = userData
    try{
        const { account } = await createAdminClient();

       const newUserAccount= await account.create(
        ID.unique(),
       userData.email, 
        userData.password,
         `${firstName} ${lastName}`
        );
        const session = await account.
        createEmailPasswordSession(email, password);
      
        cookies().set("appwrite-session", session.secret, {
          path: "/",
          httpOnly: true,
          sameSite: "strict",
          secure: true,
        });
        return parseStringify(newUserAccount);
      
    } catch {error} {
        console.error(' Error', error);
    }
}

export async function getLoggedInUser() {
    try {
      const { account } = await createSessionClient();
      return await account.get();
    } catch (error) {
      return null;
    }
  }
  