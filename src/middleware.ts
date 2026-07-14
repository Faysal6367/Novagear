import NextAuth from "next-auth"
import { authConfig } from "@/auth.config"
// This middleware function is responsible for handling authentication and authorization for specific routes in the application. It uses NextAuth to manage user sessions and access control. The middleware is configured to match certain paths, ensuring that only authenticated users can access those routes.
export default NextAuth(authConfig).auth

export const config = {
    matcher: ["/add-product", "/manage-products", "/seller-account/:path*"],
}
