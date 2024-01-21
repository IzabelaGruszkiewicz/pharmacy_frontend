import {useMutation} from "@tanstack/react-query";
import {signup as signupApi} from "./apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
    const {mutate: signup, isLoading} = useMutation({
        mutationFn: signupApi,
        onSuccess: (user) => {
            console.log(user);
            toast.success("Konto pomyślnie utworzone. Zweryfikuj adres email.")
        }
    })
    return {signup, isLoading};
}

