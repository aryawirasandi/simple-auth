import { Link } from "react-router-dom" 
export default function Login() {
    return (
        <Card className="w-2/4 mx-auto">
            <div className="t" data-tests="text-login">
                <h1 className="text-center text-2xl">Login</h1>
            </div>
            <form action="#" className="my-3">
                <Input type="text" name="username" label="username" title="Username" placeholder="Please Input Your Username"/>
                <Input type="text" name="password" label="password" title="Password" placeholder="Please Input Your Password"/>
                <Align to="center">
                    <Button className="bg-blue-500 text-white w-1/3 rounded-lg">
                        Login
                    </Button>
                </Align>
            </form>
            <Align to="center">
                <Link to="/auth/register" className="hover:text-b hover:text-blue-500 ">First time ? You can register here! </Link>
            </Align>
        </Card>
    )
}