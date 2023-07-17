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
        <div className="card m-3 d-flex flex-column align-items-center" id="card">
            <span className="align-self-start">#{id}</span>
            <img src={image} className="card-img-top" alt={`Image ${name}`} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <span className="mr-3">{type1}</span>
                {type2 && (
                    <span>{type2}</span>
                )}
            </div>
        </div>
    )
}

export default Card