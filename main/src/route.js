import home from "@/components/mainpage.vue"
import address from "@/components/adressPage.vue"
import third from "@/components/thirdPage.vue"

export const routes = [
    {path : "" , component : home },
    {path : "/adress" , component : address},
    {path : "/third" , component : third},
] ;