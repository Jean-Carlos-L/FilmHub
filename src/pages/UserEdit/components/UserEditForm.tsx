import { UserUpdateDTO } from "@models/User.model";
import { checkEmail } from "@utilities/checkEmail.utils";
import { useEffect, useState } from "react";
import { useGenres } from "src/common/hooks/useGenres";
import { useUserCommand } from "src/common/hooks/useUserCommand";
import { useUserQuery } from "src/common/hooks/useUserQuery";
import Textfield from "src/pages/Auth/components/Textfield";

interface Errors {
    fullName: string;
    phone: string;
    email: string;
    password?: string;
    genres: string;
}

const initialStatesUser: UserUpdateDTO = {
    fullName: "",
    phone: "",
    email: "",
    genres: [],
    password: "",
};

function UserProfileForm() {
    const { genres } = useGenres();
    const { user } = useUserQuery();
    const { handleUpdateUser } = useUserCommand();
    const [newUser, setNewUser] = useState<UserUpdateDTO>(initialStatesUser);
    const [errors, setErros] = useState<Errors>({
        fullName: "",
        phone: "",
        email: "",
        genres: "",
    });

    const validations = (data: UserUpdateDTO) => {
        const errors: Errors = {
            fullName: "",
            phone: "",
            email: "",
            genres: "",
        };

        if (!data.fullName) {
            errors.fullName = "El campo nombre completo es requerido";
        }
        if (!data.phone) {
            errors.phone = "El campo teléfono es requerido";
        }
        if (!data.email) {
            errors.email = "El campo correo electrónico es requerido";
        }
        if (!checkEmail(data.email)) {
            errors.email = "El correo electrónico no es válido";
        }
        if (data.genres.length === 0) {
            errors.genres = "Seleccione al menos un género";
        }
        return errors;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const errors = validations(newUser);
        const hasErros = Object.values(errors).some((error) => error !== "");
        if (hasErros) {
            setErros(errors);
            return;
        }

        console.log('newUser', newUser)

        handleUpdateUser(newUser);
    };

    useEffect(() => {
        setNewUser({
            fullName: user.name,
            phone: user.phone,
            email: user.email,
            genres: user.genres,
            password: "",
        });

    }, [user]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value,
        });
    };

    const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const options = e.target.options;
        const selectedOptions = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedOptions.push(parseInt(options[i].value));
            }
        }
        setNewUser({
            ...newUser,
            genres: selectedOptions,
        });
    };

    return (
        <div className="bg-secondary-light p-6 rounded-lg shadow-lg w-full max-w-3xl mx-auto">
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
                    <Textfield
                        label="Nombre completo"
                        id="fullName"
                        placeholder="Nombre completo"
                        type="text"
                        error={errors.fullName}
                        defaultValue={newUser.fullName}
                        onChange={handleChange}
                    />

                    <Textfield
                        label="Teléfono"
                        id="phone"
                        placeholder="Teléfono"
                        type="text"
                        error={errors.phone}
                        defaultValue={newUser.phone}
                        onChange={handleChange}
                    />

                    <Textfield
                        label="Correo electrónico"
                        id="email"
                        placeholder="Correo electrónico"
                        type="email"
                        error={errors.email}
                        defaultValue={newUser.email}
                        onChange={handleChange}
                    />

                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            value={newUser.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}
                    </div>

                    <div className="col-span-2 mb-4">
                        <label
                            className="block text-white text-sm font-bold mb-2"
                            htmlFor="genres"
                        >
                            Géneros
                        </label>
                        <select
                            name="genres"
                            id="genres"
                            className="mb-2 p-2 border block w-full bg-blue-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            multiple
                            onChange={handleChangeSelect}
                            value={newUser.genres}
                        >
                            {genres?.map((genre) => (
                                <option key={genre.id} value={genre.id}>
                                    {genre.name}
                                </option>
                            ))}
                        </select>
                        {errors.genres && (
                            <p className="text-red-500 text-xs italic">{errors.genres}</p>
                        )}
                    </div>
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

export default UserProfileForm;
