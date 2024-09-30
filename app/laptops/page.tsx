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
    description: "Presentamos un conjunto de precios, sobre la actualizacion de laptops o PC Escritorio para mejorar la velocidad, estos paquetes de actualización son válidos para el disco duro interno (HDD/SSD) 3.5 ."
}

const promos = [
    {
        product: "SSD 120",
        description: "Espacio optimo para trabajo de ofimatica, programas básicos , no se recomienda almacenamiento multimedia",
        price: 700,
        listbonus: [ 
            "Limpieza interna hardware",
            "Cambio pasta termica",
            "Instalación sistema operativo",
            "Configuración inicial orientada al rendimiento",
            "Garantía directa 3 meses"
        ]
    },
    {
        product: "SSD 240",
        description: "Espacio optimo para escuela, programas básicos, almacenamiento moderado de archivos",
        price: 900,
        listbonus: [ 
            "Limpieza interna hardware",
            "Cambio pasta termica",
            "Instalación sistema operativo",
            "Configuración inicial orientada al rendimiento",
            "Garantía directa 3 meses"
        ]
    },
    {
        product: "SSD 480",
        description: "Espacio optimo para escuela, programas básicos, almacenamiento moderado de archivos y multimedia",
        price: 1200,
        listbonus: [ 
            "Limpieza interna hardware",
            "Cambio pasta termica",
            "Instalación sistema operativo",
            "Configuración inicial orientada al rendimiento",
            "Garantía directa 3 meses"
        ]
    }
]