import { useLoaderData , Form , redirect , useActionData ,useNavigation} from "react-router-dom"; "react-router-dom"; 
import { loginUser } from "../api"; 

export function loader({ request }) {
    return new URL(request.url).searchParams.get("message")
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email") // Must Have The Same Name As Name In Input
    const password = formData.get("password") // Must Have The Same Name As Name In Input
    const pathname = new URL(request.url).searchParams.get("redirectTo") || "/host"
    try {
        const data = await loginUser({email,password})
        localStorage.setItem("loggedIn",true)
        return redirect(pathname)
    } catch (err) {
        return err.message
    }
}

export default function LogIn() {

    const error = useActionData()

    const navigation = useNavigation()

    const message = useLoaderData();

    return (
        <>
        {message && <p className="login-text text-danger text-center fw-semibold mb-0">{message}<br/>Note: Email:A@A.com - Pass:123</p>}

        <div className="form-box text-center">
            <h1 className={message ? "text-center fw-bold mt-3 pt-3" : "text-center fw-bold mt-5 pt-5" }>
                Sign In To Your Account</h1>

            {error && <h5 className="text-center text-danger fw-bold">Wrong Username Or Password</h5>}

            <Form method="post" replace className="form mt-4">

                <input className="input" type="email" name="email" placeholder="Email Address"/>

                <input className="input" type="password" name="password" placeholder="Password"/>

                <button disabled={navigation.state === "submitting"} className= "sign-in mt-4">
                    {navigation.state === "submitting" ? "Logging In..." : "Log In"}
                </button>

            </Form>

            <p className="mt-5 fw-semibold">Don’t Have An Account? <span className="create">Create One Now</span></p>
        </div>
        </>
    )
}