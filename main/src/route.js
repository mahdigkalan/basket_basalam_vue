import home from "@/components/page1/mainpage.vue"
import address from "@/components/page2/adressPage.vue"
import third from "@/components/page3/mainThirdPage.vue"

export const routes = [
    {path : "" , component : home },
    {path : "/adress" , component : address},
    {path : "/pay" , component : third},
] ;