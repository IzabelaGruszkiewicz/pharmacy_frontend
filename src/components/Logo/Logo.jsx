import {NavLink} from "react-router-dom";

export function Logo() {
    return (
        <NavLink to={`/leki`}>
            <div>
                <h1>Lekolandia</h1>
            </div>
        </NavLink>
    );
}

