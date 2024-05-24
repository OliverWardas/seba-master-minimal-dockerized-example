import {Button, Card, List, TextField} from "@mui/material";
import ShoppingListItem from "./ShoppingListItem";
import {useState} from "react";

export default function ShoppingList({items, setItems}) {

    const [input, setInput] = useState("");

    function deleteItem(index) {
        setItems(items.toSpliced(index, 1))
    }

    function addItem() {
        if (input.trim() === "") {
            return
        }

        setItems([...items, input]);
        setInput("")
    }

    return (
        <>
            <Card variant="outlined" sx={{padding: "1em", display: "flex", alignItems: "center"}}>
                <TextField variant="outlined" placeholder="New Item..." value={input}
                           onChange={(e) => setInput(e.target.value)}/>
                <Button variant="contained" sx={{marginLeft: "auto"}} onClick={addItem}>Add Item</Button>
            </Card>
            {items.length > 0 ?
                <>
                    <h3>Your Shopping List: ({items.length} items)</h3>
                    <List>
                        {items.map((x, index) => <ShoppingListItem name={x} index={index}
                                                                   onDeleteButtonClicked={deleteItem}
                                                                   key={index}></ShoppingListItem>)}
                    </List>
                </>
                :
                <h3>Your Shopping List is empty.</h3>
            }
        </>
    );
}
