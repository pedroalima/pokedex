function Card({name}: {name: string}) {
    return (
        <div className="card m-3">
            {/* <img src="" className="card-img-top" alt="" /> */}
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text"></p>
            </div>
        </div>
    )
}

export default Card