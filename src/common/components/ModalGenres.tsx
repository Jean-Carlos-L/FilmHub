import { Modal, Box, Button, Typography } from "@mui/material";
import { Genre } from "@models/Genre.model";
import ListItemsGenres from "./ListItemsGenres";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 400,
   bgcolor: "background.paper",
   border: "1px solid #000",
   boxShadow: 24,
   borderRadius: 5,
   paddingTop: 2,
   paddingBottom: 2,
};

function ModalGenres({
   show,
   handleClose,
   selectedGenres,
   setSelectedGenres,
}: PropsModalGenres) {
   return (
      <Modal
         open={show}
         onClose={handleClose}
         aria-labelledby="modal-modal-title"
         aria-describedby="modal-modal-description"
      >
         <Box sx={style}>
            <Typography
               id="modal-modal-title"
               variant="h6"
               component="h2"
               className="px-3"
            >
               Generos
            </Typography>
            <small className="px-3 text-gray-500">
               Seleccione los generos que desea filtrar. Maximo 5 generos.
            </small>
            <ListItemsGenres
               selectedGenres={selectedGenres}
               setSelectGenres={setSelectedGenres}
            />

            <footer className="mt-3 px-3 pr-6 text-end">
               <Button variant="text" onClick={handleClose}>
                  Cerrar
               </Button>
            </footer>
         </Box>
      </Modal>
   );
}

interface PropsModalGenres {
   show: boolean;
   handleClose: () => void;
   selectedGenres: Genre[];
   setSelectedGenres: (genres: Genre) => void;
}

export default ModalGenres;
