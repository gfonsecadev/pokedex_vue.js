export default({
   selectPokemon(context,payload){
        //sempre começa com falso
        let isChange=false
        
         //se o pokemon clicado for diferente do que está sendo mostrado e estiver clicado.
          if(context.state.pokemon_click.nome!=payload && context.state.isClick==true){
            setTimeout(()=>{
              context.state.isClick=!context.state.isClick  
            },500)
            isChange=true
           
          }
            
            //essa logica será repetida.
            context.state.pokemon_click=context.state.pokemons.filter((e)=>e.nome==payload)[0]
            context.state.isClick=!context.state.isClick

            //se não estiver clicado e pokemon for o mesmo.
            if(!context.state.isClick && !isChange ){
                context.state.pokemon_click={}
            }

   }
   
})
