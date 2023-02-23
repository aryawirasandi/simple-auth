import { Link } from "react-router-dom";
export default function Navbar() {

    const [lists, setLists] = useState([
        {
            name: "Home",
            to: "/"
        },
        {
            name: "Login",
            to: "/auth/login"
        },
        {
            name: "Register",
            to: "/auth/register"
        },
        {
            name: "Profile",
            to: "/profile"
        }
    ]);

    return (
        <header>
            <nav>
                <ul className="flex p-5 gap-10 bg-blue-400 text-white justify-end">
                    {lists.map((list, index) => (
                        <li key={index} className="hover:opacity-50">
                            <Link to={list.to}>{list.name}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}