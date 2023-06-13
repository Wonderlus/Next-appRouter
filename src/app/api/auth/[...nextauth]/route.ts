import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import connect from "@/utils/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";



const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials?) {
        await connect();

        if (!credentials) {
          throw new Error("Credentials not found")
        }
        try {
          const user: any = await User.findOne({ email: credentials?.email });

          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password,
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              throw new Error("Password is incorrect")
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  pages: {
    error: "/dashboard/login"
  }
});

export { handler as GET, handler as POST };
