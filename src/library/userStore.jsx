import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { database } from "./Firebase";

export const useUserStore = create((set) => ({
    currentUser: null,
    isLoading: true,
    fetchUserInfo: async (uid) => {
        if (!uid) return set({ currentUser: null, isLoading: true })

        try {
            const getRef = doc(database, "users", uid)
            console.log("getRef", getRef)

            const docSnap = await getDoc(getRef)
            console.log("docSnap", docSnap)

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                set({ currentUser: docSnap.data(), isLoading: false });
            } else {
                console.log("No such document!");
                set({ currentUser: null, isLoading: true });
            }
        } catch (err) {
            console.log(err)
            return set({ currentUser: null, isLoading: true })
        }
    }
}))