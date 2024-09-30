import CardsPricing from '@/app/components/cardpricing'

const Index = () => {
    return (
        <>
            <CardsPricing {...bannerpromo} promos={promos}></CardsPricing>
        </>
    )
}


export default Index

const bannerpromo = {
    section: "Actualización para Laptops",
    description: "Presentamos un conjunto de precios , sobre la actualizacion de laptops o pc para mejorar la velocidad, estos paquetes de actualización son validos para el SSD o mejor conocido como disco duro."
}

const promos = [
    {
        product: "SSD 120",
        description: "Espacio optimo para trabajo de ofimatica, programas basicos , no se recomienda almacenamiento multimedia",
        price: 700,
        listbonus: [ 
            "Limpieza interna",
            "Cambio pasta termica",
            "Instalacion sistema operativo",
            "Configuracion inicial orientada al rendimiento",
            "Garantia directa 3 meses"
        ]
    },
    {
        product: "SSD 240",
        description: "Espacio optimo para escuela, programas basicos, almacenamiento moderado de archivos",
        price: 900,
        listbonus: [ 
            "Limpieza interna",
            "Cambio pasta termica",
            "Instalacion sistema operativo",
            "Configuracion inicial orientada al rendimiento",
            "Garantia directa 3 meses"
        ]
    },
    {
        product: "SSD 480",
        description: "Espacio optimo para escuela, programas basicos, almacenamiento moderado de archivos y almacenamiento multimedia",
        price: 1200,
        listbonus: [ 
            "Limpieza interna",
            "Cambio pasta termica",
            "Instalacion sistema operativo",
            "Configuracion inicial orientada al rendimiento",
            "Garantia directa 3 meses"
        ]
    }
]