import TopBar from "./components/TopBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import LandingPage from "./components/LandingPage";
import {Container} from "@mui/material";
import {useEffect, useState} from "react";
import axios from "axios";

function App() {

    const [items, setItems] = useState([]);

    async function loadAllItems(){
        const res = await axios.get("/shoppingItems/getAll");
        console.log(res)
        setItems(res.data);
    }

    useEffect(()=>{
        axios.defaults.baseURL = "http://localhost:8080";
        loadAllItems().catch(e=>console.log(e));
    }, []);

    return (
        <BrowserRouter>
            <TopBar itemcount={items.length}/>
            <Container sx={{marginTop: "1em"}}>
                <Routes>
                    <Route path="/" element={<LandingPage/>}/>
                    <Route path="/App" element={<ShoppingList items={items} setItems={setItems}/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

export default App;
