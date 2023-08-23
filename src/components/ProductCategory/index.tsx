import './style.css'

interface NameProps {
    name: string;
}

export default function ProductCategory(props: NameProps) {
    return (
        <div className="dsc-category">
            {props.name}
        </div>
    )
}