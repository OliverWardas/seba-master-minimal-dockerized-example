import {Card, IconButton, ListItem} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ShoppingListItem({name, index, onDeleteButtonClicked}) {
    return (
        <ListItem key={index}>
            <span>
            {index+1}. {name}
            </span>
            <IconButton onClick={()=>onDeleteButtonClicked(index)}>
                <DeleteIcon/>
            </IconButton>
        </ListItem>
    );
}