import {createRouter,createWebHistory} from 'vue-router'

const routes=[//aqui serão inseridas as rotas
    
]



const router=createRouter({ 
    history:createWebHistory(),//modo que o browser vai fazer a navegação createWevHashHistory ou createWebHistory.
    routes:routes //as rotas que serão passadas.
})

export default router
