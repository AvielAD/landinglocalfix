import { CardInterface } from '@/Interfaces/card'
import Page from './page'

const CardComponent: React.FC<CardInterface>=({titulo, descripcion, imagenUrl}) => {
    return (
        <Page titulo={titulo} descripcion={descripcion} imagenUrl={imagenUrl} ></Page>
    )
}


export default CardComponent