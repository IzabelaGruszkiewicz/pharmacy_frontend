import {BACK_END_URL} from "../constants/api.js";

export function mapLoader() {
    return(
        fetch(`${BACK_END_URL}/pharmacy`)
    );
}