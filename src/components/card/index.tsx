import "./index.scss"

type Pokemon = {
    id: number,
    image: string,
    name: string,
    type1: string,
    type2: string
}

function Card({ id, image, name, type1, type2 }: Pokemon) {
    return (
        <div className="card p-2 m-3 m-md-0 d-flex flex-column align-items-center bg-nd-color" id="card">
            <span className="align-self-start">#{id}</span>
            <img src={image} className="card-img-top image-custom" alt={`Image ${name}`} />
            <div className="card-body text-center w-100">
                <h5 className="card-title text-capitalize">{name}</h5>
                <div className="d-flex justify-content-md-around">
                    <span className={
                        type1 === "grass" ? "bg-grass rounded px-2 text-white" :
                            type1 === "poison" ? "bg-poison rounded px-2 text-white" :
                                type1 === "fire" ? "bg-fire rounded px-2 text-white" :
                                    type1 === "water" ? "bg-water rounded px-2 text-white" :
                                        type1 === "rock" ? "bg-rock rounded px-2 text-white" :
                                            type1 === "flying" ? "bg-flying rounded px-2 text-white" :
                                                type1 === "bug" ? "bg-bug rounded px-2 text-white" :
                                                    type1 === "normal" ? "bg-normal rounded px-2 text-white" :
                                                        type1 === "electric" ? "bg-electric rounded px-2 text-white" :
                                                            type1 === "ground" ? "bg-ground rounded px-2 text-white" :
                                                                type1 === "fairy" ? "bg-fairy rounded px-2 text-white" :
                                                                    type1 === "fighting" ? "bg-fighting rounded px-2 text-white" :
                                                                        type1 === "psychic" ? "bg-psychic rounded px-2 text-white" :
                                                                            type1 === "steel" ? "bg-steel rounded px-2 text-white" :
                                                                                type1 === "ice" ? "bg-ice rounded px-2 text-white" :
                                                                                    type1 === "ghost" ? "bg-ghost rounded px-2 text-white" :
                                                                                        type1 === "dragon" ? "bg-dragon rounded px-2 text-white" : "rounded px-2 text-white"}>{type1}</span>
                    {type2 && (
                        <span className={
                            type2 === "grass" ? "bg-grass rounded px-2 text-white" :
                                type2 === "poison" ? "bg-poison rounded px-2 text-white" :
                                    type2 === "fire" ? "bg-fire rounded px-2 text-white" :
                                        type2 === "water" ? "bg-water rounded px-2 text-white" :
                                            type2 === "rock" ? "bg-rock rounded px-2 text-white" :
                                                type2 === "flying" ? "bg-flying rounded px-2 text-white" :
                                                    type2 === "bug" ? "bg-bug rounded px-2 text-white" :
                                                        type2 === "normal" ? "bg-normal rounded px-2 text-white" :
                                                            type2 === "electric" ? "bg-electric rounded px-2 text-white" :
                                                                type2 === "ground" ? "bg-ground rounded px-2 text-white" :
                                                                    type2 === "fairy" ? "bg-fairy rounded px-2 text-white" :
                                                                        type2 === "fighting" ? "bg-fighting rounded px-2 text-white" :
                                                                            type2 === "psychic" ? "bg-psychic rounded px-2 text-white" :
                                                                                type2 === "steel" ? "bg-steel rounded px-2 text-white" :
                                                                                    type2 === "ice" ? "bg-ice rounded px-2 text-white" :
                                                                                        type2 === "ghost" ? "bg-ghost rounded px-2 text-white" :
                                                                                            type2 === "dragon" ? "bg-dragon rounded px-2 text-white" : "rounded px-2 text-white"}>{type2}</span>
                    )}
                </div>
            </div>
        </div >
    )
}

export default Card