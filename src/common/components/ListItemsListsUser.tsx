import { List as ListModel, MultimediaList } from "@models/List.model";
import { useListsUser } from "../hooks/useListsUser";
import {
   List,
   ListItem,
   ListItemText,
   ListItemButton,
   ListItemIcon,
   Checkbox,
} from "@mui/material";

function ListItemsListsUser({ multimediaLists, setSelectList }: PropsListItemsListsUser) {
   const { listsUser } = useListsUser();
   const isChecked = (list: ListModel) => multimediaLists.some(l => l.idLista === list.id);
   const handleOnClick = (list: ListModel) => setSelectList(list);

   return (
      <List dense style={{ height: 400 }} className="overflow-y-auto p-10">
         {listsUser.map((list) => (
            <ListItem key={list.id} disablePadding>
               <ListItemButton onClick={() => handleOnClick(list)}>
                  <ListItemIcon>
                     <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        checked={isChecked(list)}
                     />
                  </ListItemIcon>
                  <ListItemText primary={list.name} />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   );
}

interface PropsListItemsListsUser {
   multimediaLists: MultimediaList[];
   setSelectList: (lists: ListModel) => void;
}

export default ListItemsListsUser;
