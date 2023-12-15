import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfig = {
  projectId: `${import.meta.env.VITE__APPWRITE__PROJECT__ID}`,
  url: import.meta.env.VITE__APPWRITE__PROJECT__ID,
  databaseId: import.meta.env.VITE__APPWRITE__DATABASE__ID,
  storageId: import.meta.env.VITE__APPWRITE__STORAGE__ID,
  savesCollectionId: import.meta.env.VITE__APPWRITE__SAVES__COLLECTION__ID,
  postCollectionId: import.meta.env.VITE__APPWRITE__POSTS__COLLECTION__ID,
  userCollectionId: import.meta.env.VITE__APPWRITE__USERS__COLLECTION__ID,
};

export const client = new Client();
client.setProject(appwriteConfig.projectId);
client.setEndpoint(appwriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
