import { useNavigate } from "react-router-dom";
import { useListsUser } from "src/common/hooks/useListsUser";
import { replaceParam } from "@utilities/formatParams.utils";
import { ROUTES } from "src/routes/routes";
import { List } from "@models/List.model";

function Lists() {
    const navigate = useNavigate();
    const { listsUser } = useListsUser();

    const navigateToList = (id: number, list: List) => {
        navigate(replaceParam(ROUTES.LISTS_MULTIMEDIA, "id", id.toString()), { state: list });
    };

    return (
        <div className="bg-blue-900 min-h-screen">
            <div className="p-8">
                <h1 className="text-white text-2xl font-bold mb-4">Listas</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {listsUser.map((list) => (
                        <div
                            key={list.id}
                            className="bg-white p-4 rounded"
                            onClick={() => navigateToList(list.id, list)}
                        >
                            <h2 className="text-lg font-bold">{list.name}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Lists;
