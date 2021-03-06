import Personal from "./personal/personal";
import Info from "./info/info";

function Page() {
    return (
        <div id="page">
            <h1>Gautier Kiss</h1>
            <div id="body">
                <Personal/>
                <Info/>
            </div>
            <p id="p">Do I know how to do a beautiful CV? No, but I know how to script ;)</p>
        </div>
    )
}

export default Page;