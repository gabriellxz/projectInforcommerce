import './style.css'
import imageComputer from '../../assets/img/computer.png'
import imageEdit from '../../assets/img/edit.svg'
import imageDelete from '../../assets/img/delete.svg'

export default function TrAdmin() {
    return (
        <tr>
            <td className="dsc-tb576">341</td>
            <td><img className="dsc-product-listing-image" src={imageComputer} alt="Computer" /></td>
            <td className="dsc-tb768">R$ 5000,00</td>
            <td className="dsc-txt-left">Computador Gamer XT Plus Ultra</td>
            <td><img className="dsc-product-listing-btn" src={imageEdit} alt="Editar" /></td>
            <td><img className="dsc-product-listing-btn" src={imageDelete} alt="Deletar" /></td>
        </tr>
    )
}