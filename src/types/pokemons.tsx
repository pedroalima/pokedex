export type PokemonsProps = {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    },
    types: any
}

export type AllPokemons = {
    id: number,
    name: string,
    sprites: {
        front_default: string,
        other: {
            "official-artwork": {
                front_default: string
            }
        }
    },
    types: any
}

export type PokemonT = {
    name: string,
    id: number,
    height: number,
    weight: number,
    types: [],
    sprites: {
        "front_default": string,
        other: {
            "official-artwork": {
                "front_default": string,
            },
        },
    },
    stats: [],
}