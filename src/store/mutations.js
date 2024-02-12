export default (
    {
        open_or_close(state) {
            state.isOpen = !state.isOpen
        },



        saveAbilitie(state, payload) {
            const pokemon_click_id = state.pokemon_click.id;

            state.pokemons.map((pokemon) => {
                if (pokemon.id == pokemon_click_id) {
                    if(!pokemon.habilidades.includes(payload)){
                    pokemon.habilidades.push(payload)}
                }
            })
        }
        ,

        deleteAbilitie(state, payload) {
            const pokemon_click_id = state.pokemon_click.id;
            state.pokemons.map((pokemon) => {
                if (pokemon.id == pokemon_click_id) {

                    pokemon.habilidades.map((abilitie, index) => {
                        if (index == payload) pokemon.habilidades.splice(index, 1)
                    })

                }
            })
        }





    }
)
