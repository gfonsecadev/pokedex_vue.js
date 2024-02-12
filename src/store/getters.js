export default({
     getAbilities(state){
        return state.pokemon_click.habilidades;
    },

    getStatus(state){
        const status={
            types: Object.keys(state.pokemon_click.status),
            values: Object.values(state.pokemon_click.status)
        }
        return status;
    }
})
