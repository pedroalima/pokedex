function Card({ image, register, name, type1, type2 }: { image: string, register: number, name: string, type1: string, type2: string }) {
    return (
        <div className="card m-3">
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <span>{register}</span>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{type1}</p>
                {type2 && (
                    <p className="card-text">{type2}</p>
                )}
            </div>
        </div>
    )
}

export default Card