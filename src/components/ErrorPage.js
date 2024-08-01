import { useRouteError } from "react-router-dom"

const ErrorPage = () => {

    const err = useRouteError();
    const {statusText} = err 
    console.log(err)
    return (
        <div>
            <h1>Ooopss!!</h1>
            <h3>Somthing went Wrong!!</h3>
            <h3>{statusText}</h3>
        </div>
    )
}

export default ErrorPage;