import {useMutation, useQueryClient} from "@tanstack/react-query";
import {logout as logoutApi} from "../../src/api/apiAuth.js"
import {useNavigate} from "react-router-dom";

export function UseLogout(){
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: logout, isLoading} = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate('/login', {replace: true});
        },
    });
    return {logout, isLoading};
}