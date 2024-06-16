import { UserUpdateDTO } from "@models/User.model";
import {
    TextField,
    FormControl,
    InputLabel,
    Select,
    FilledInput,
    Box,
    MenuItem,
    Chip
} from "@mui/material";
import { RootState } from "@redux/store";
import { checkEmail } from "@utilities/checkEmail.utils";
import { useSelector } from "react-redux";
import { useGenres } from "src/common/hooks/useGenres";
import { useUserCommand } from "src/common/hooks/useUserCommand";

function UserProfileForm() {
    const { genres } = useGenres();
    const user = useSelector((state: RootState) => state.auth.user);
    const { handleUpdateUser } = useUserCommand()

    const validations = (data: UserUpdateDTO) => {
        if (!data.fullName) {
            alert("El campo nombre completo es requerido");
            return false;
        }
        if (!data.phone) {
            alert("El campo teléfono es requerido");
            return false;
        }
        if (!data.email) {
            alert("El campo correo electrónico es requerido");
            return false;
        }
        if (!checkEmail(data.email)) {
            alert("El correo electrónico no es válido");
            return false;
        }
        if (data.genres.length === 0) {
            alert("El campo géneros es requerido");
            return false;
        }
        return true;
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user: UserUpdateDTO = {
            fullName: formData.get("fullname") as string,
            phone: formData.get("phone") as string,
            email: formData.get("email") as string,
            password: formData.get("password") as string,
            genres: formData.getAll("genres") as string[],
        };

        if (!validations(user)) return;

        handleUpdateUser(user);
    };

    return (
        <div className="bg-blue-900 p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
            <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-6">
                    <div className="bg-gray-500 w-24 h-24 rounded-full flex items-center justify-center text-white">
                        <svg
                            className="w-12 h-12"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5.121 19.071A7.5 7.5 0 0117.5 10.5m-4.379 2.879l-1.44 1.44M5.121 5.121a7.5 7.5 0 010 10.606m-1.06-1.06a9 9 0 0112.727-12.728m4.95 4.95a9 9 0 01-12.727 12.728m4.95-4.95L10.5 17.5m5.879-5.879l-1.44 1.44M5.121 19.071L5.12 19.071z"
                            />
                        </svg>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <TextField
                        className="bg-white rounded-sm"
                        name="fullname"
                        label="Nombre completo"
                        variant="filled"
                        defaultValue={user?.name}
                    />
                    <TextField
                        className="bg-white rounded-sm"
                        name="phone"
                        label="Teléfono"
                        variant="filled"
                        defaultValue={user.phone}
                    />
                    <TextField
                        className="bg-white rounded-sm"
                        name="email"
                        label="Correo electrónico"
                        variant="filled"
                        type="email"
                        defaultValue={user.email}
                    />
                    <TextField
                        className="bg-white rounded-sm"
                        name="password"
                        label="Contraseña"
                        variant="filled"
                        type="password"
                    />

                    <FormControl className="bg-white rounded-sm">
                        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                        <Select
                            style={{ width: "100%" }}
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            name="genres"
                            multiple
                            defaultValue={user.genres.map((genre) => genre.name)}
                            input={<FilledInput id="demo-multiple-chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                            MenuProps={MenuProps}
                        >
                            {genres.map((genre) => (
                                <MenuItem key={genre?.id} value={genre?.name}>
                                    {genre?.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </div>
                <button
                    type="submit"
                    className="w-full py-2 mt-4 bg-green-600 text-white rounded-md"
                >
                    Guardar
                </button>
            </form>
        </div>
    );
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default UserProfileForm;
