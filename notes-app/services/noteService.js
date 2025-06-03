import dataService from "./databaseservice";
import { ID } from "react-native-appwrite";

//Appwrite database and collection ID

const dbId = process.env.EXPO_PUBLIC_APPWRITE_DB_ID
const colId = process.env.EXPO_PUBLIC_APPWRITE_COL_NOTES_ID

const noteService = {
    //Get Notes
    async getNotes() {
        const response = await dataService.listDocuments(dbId, colId);
        if(response.error){
            return {error: response.error};
        }

        return {data: response}
    },
    //Add new note
    async addNote(text) {
       
        if(!text){
            return {error: 'Note text cannot be empty'};
        }

        const data = {
            text: text,
            createdAt: new Date().toISOString()
        }
        const response = await dataService.createDocument(
            dbId,
            colId,
            data,
            ID.unique()
        );
        if(response?.error){
            return{ error: response.error };
        }
        return { data: response};
    },
};

export default noteService;
