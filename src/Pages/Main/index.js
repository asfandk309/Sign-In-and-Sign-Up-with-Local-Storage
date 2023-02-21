import axios from "axios";
import { useEffect, useState } from "react";
import Search from '../../Components/Search/Search';
import Card from '../../Components/Card/Card';
import Layout from "../Layout";


const API = "https://api.github.com/users/";

function Main() {

    const [text, setText] = useState("muhammadumair11");
    const [user, setUser] = useState("muhammadumair11");
    const [error, setError] = useState("")

    useEffect(() => {
        handleSearch();
        setText("");
    }, [])

    const handleSearch = () => {
        axios.get(`${API}${text}`)
            .then((resp) => {
                setUser(resp.data);
                setError("");
            })
            .catch((error) => {
                setError("No match");
            })
    }

    return (
        <Layout>
            <Search
                handleSearch={handleSearch}
                text={text}
                setText={setText}
                error={error}
            />
            <Card
                user={user}
            />
        </Layout>
    )
}

export default Main;



