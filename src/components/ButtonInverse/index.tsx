import { Link } from 'react-router-dom'
import './style.css'

interface NameProps {
    name: string
}

export default function ButtonInverse(props: NameProps) {
    return (
        <Link to="/">
            <div className="dsc-btn dsc-btn-white">
                {props.name}
            </div>
        </Link>
    )
}