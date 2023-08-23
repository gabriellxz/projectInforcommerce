import './style.css'

export default function InputEmail() {
    return (
        <div>
            <input className="dsc-form-control" type="text" placeholder="Email" />
            {/*<div className="dsc-form-error">Campo obrigatório</div>*/}
        </div>
    )
}