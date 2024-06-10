import { Modal, Box, Button, Typography } from "@mui/material";
import { List, MultimediaList } from "@models/List.model";
import ListItemsListsUser from "./ListItemsListsUser";

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

function ModalLists({
   show,
   handleClose,
   multimediaLists,
   setSelectedList,
}: PropsModalListsUser) {
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
               Listas
            </Typography>
            <small className="px-3 text-gray-500">
               Seleccione la lista a la que desea agregar.
            </small>
            <ListItemsListsUser
               multimediaLists={multimediaLists}
               setSelectList={setSelectedList}
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

interface PropsModalListsUser {
   show: boolean;
   handleClose: () => void;
   multimediaLists: MultimediaList[];
   setSelectedList: (list: List) => void;
}

export default ModalLists;
