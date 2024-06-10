import { Genre } from "@models/Genre.model";
import { useGenres } from "../hooks/useGenres";
import {
   List,
   ListItem,
   ListItemText,
   ListItemButton,
   ListItemIcon,
   Checkbox,
} from "@mui/material";

function ListItemsGenres({ selectedGenres, setSelectGenres }: PropsListItemsGenres) {
   const { genres } = useGenres();
   const isChecked = (genre: Genre) => selectedGenres.some((g) => g.id === genre.id);

   const handleOnClick = (genre: Genre) => setSelectGenres(genre);

   return (
      <List dense style={{ height: 400 }} className="overflow-y-auto p-10">
         {genres.map((genre) => (
            <ListItem key={genre.id} disablePadding>
               <ListItemButton onClick={() => handleOnClick(genre)}>
                  <ListItemIcon>
                     <Checkbox
                        edge="start"
                        tabIndex={-1}
                        disableRipple
                        checked={isChecked(genre)}
                     />
                  </ListItemIcon>
                  <ListItemText primary={genre.name} />
               </ListItemButton>
            </ListItem>
         ))}
      </List>
   );
}

interface PropsListItemsGenres {
   selectedGenres: Genre[];
   setSelectGenres: (genres: Genre) => void;
}

export default ListItemsGenres;
