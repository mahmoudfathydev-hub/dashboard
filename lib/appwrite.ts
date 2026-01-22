import { Client, Databases, Storage, Account, ID } from 'appwrite';

const client = new Client()
    .setEndpoint('https://fra.cloud.appwrite.io/v1')
    .setProject('6971642800054932237d');
const databases = new Databases(client);
const storage = new Storage(client);
const account = new Account(client);

export { client, databases, storage, account, ID };
export const appwriteConfig = {
    databaseId: "69716899000cdbb5a0d2",
    authCollectionId: "696d3463003347783c46"
};