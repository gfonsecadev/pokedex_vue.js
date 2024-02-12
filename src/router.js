import {createRouter,createWebHistory} from 'vue-router'
const routes=[//aqui serão inseridas as rotas
    {
        path:"/status",
        name: "status",
        component: ()=>import(/*webpackChunkName:"Detalhes"*/'@/components/Left/Details/LeftStatus.vue'),
        
    },
    {
        path:"/abilities",
        name:"abilities",
        component:()=>import(/*webpackChunkName:"Detalhes"*/"@/components/Left/Details/LeftAbilities.vue")
    },
    {
        path:"/about",
        name:"about",
        component: ()=>import(/*webpackChunkName:"Detalhes"*/"@/components/Left/Details/LeftAbout.vue")
    }
]



const router=createRouter({ 
    history:createWebHistory(),//modo que o browser vai fazer a navegação createWevHashHistory ou createWebHistory.
    routes:routes //as rotas que serão passadas.
})

export default router
