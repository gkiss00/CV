import Pp from "./pp"
import Details from "./details";
import Langage from "./langages";
import Others from "./others";

function Personal() {
    return (
        <div id="personal">
            <Pp/>
            <Details/>
            <Langage/>
            <Others/>
        </div>
    )
}

export default Personal;