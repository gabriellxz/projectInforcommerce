import './style.css'

interface NameProps {
    name: string;
}

export default function ButtonPrimary(props: NameProps) {
    return (
        <div className="dsc-btn dsc-btn-blue">
            {props.name}
        </div>
    )
}