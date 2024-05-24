import TopBar from "./components/TopBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ShoppingList from "./components/ShoppingList";
import LandingPage from "./components/LandingPage";
import {Container} from "@mui/material";
import {useState} from "react";

function App() {

    const [items, setItems] = useState(["Eggs", "Milk", "Meat"]);

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
