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
    description: "Presentamos un conjunto de precios, sobre la actualización de laptops o PC Escritorio para mejorar la velocidad, estos paquetes de actualización son válidos para el disco duro interno (HDD/SSD) 3.5 ."
}

const promos = [
    {
        product: "Re-instalación de sistema operativo WINDOWS",
        description: "Ya sea para mejorar el almacenamiento al liberar espacio, mejorar rendimiento o eliminar virus de raíz",
        price: 250,
        listbonus: [ 
            "instalación Windows 10, Windows 11, Linux",
            "Configuración optimizada para rendimiento",
            "Se conserva la licencía aprobada para el dispositivo",
            "Se descarga paquete mas reciente de actualizaciones de seguridad y drivers",
            "Respaldo de información de hasta 30gb",
        ]
    },
    {
        product: "Mantenimiento interno hardware",
        description: "Evitando el sobrecalendamiento mejora de rendimiento y evitar posibles fallos a futuro",
        price: 350,
        listbonus: [ 
            "Desarmado del dispositivo",
            "Limpieza interna a detalle",
            "Cambio de pasta termica",
            "Revision y limpieza de puntos criticos",
        ]
    },
    {
        product: "Re-instalación de sistema operativo MAC",
        description: "Ya sea para mejorar el almacenamiento al liberar espacio, mejorar rendimiento o eliminar virus de raíz",
        price: 350,
        listbonus: [ 
            "instalación Windows 10, Windows 11, Linux",
            "Configuración optimizada para rendimiento",
            "Se conserva la licencía aprobada para el dispositivo",
            "Se descarga paquete mas reciente de actualizaciones de seguridad y drivers",
            "Respaldo de información de hasta 30gb",

        ]
    }
]