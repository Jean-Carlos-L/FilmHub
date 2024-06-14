import React from "react";
import CardMultimedia from "./CardMultimedia";
import { replaceParam } from "@utilities/formatParams.utils";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "src/routes/routes";
import { Multimedia } from "@models/Multimedia.model";




interface MovieSectionProps {
    title: string;
    multimedia: Multimedia[];
}

const MovieSection: React.FC<MovieSectionProps> = ({ title, multimedia }) => {
    const navigate = useNavigate();
    return (
        <div className="mb-8">
            <h2 className="text-2xl text-white mb-4">{title}</h2>
            <div className="grid grid-cols-4 gap-6 mb-">
                {multimedia.map((multimedia) => {
                    return (
                        <CardMultimedia
                            key={multimedia.id}
                            id={multimedia.id}
                            title={multimedia.title}
                            image={multimedia.image}
                            alt={`Pelicula: ${multimedia.title}`}
                            navigateTo={() =>
                                navigate(
                                    replaceParam(ROUTES.SINGLE_ITEM, "id", multimedia.id)
                                )
                            }
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MovieSection;
