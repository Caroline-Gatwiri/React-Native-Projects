import { account } from "./appwrite";
import { ID, OAuthProvider } from "react-native-appwrite";

const authService = {
    //Register a user
    async register(email, password){
        try {
            const response = await account.create(ID.unique(), email, password);
            return response;
        } catch (error) {
            return {
                error: error.message || 'Registration failed.Please try again'
            }
        }
    },
        //Login
    async login(email, password){
        try {
            const response = await account.createEmailPasswordSession(email, password);
            return response;
        } catch (error) {
            return {
                error: error.message || 'Login failed.Please check your credentials'
            }
        }
    },
    //Get Logged in User
    async getUser(){
        try {
            return await account.get();
        } catch (error) {
            return null;
        }
    },
    //Logout
    async logout(){
        try {
            await account.deleteSession('current');
        } catch (error) {
            return {
                error: error.message || 'Logout failed please try again'
            }
        }
    }
};


export default authService;