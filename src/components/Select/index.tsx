import './style.css'

export default function Select() {
    return (
        <div>
            <select className="dsc-form-control dsc-select" required>
                <option value="" disabled selected>Categorias</option>
                <option value="1">Valor 1</option>
                <option value="2">Valor 2</option>
            </select>
        </div>
    )
}
