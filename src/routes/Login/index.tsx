import ButtonSubmit from '../../components/ButtonSubmit'
import HeaderClient from '../../components/HeaderClient'
import InputEmail from '../../components/InputEmail'
import InputPassword from '../../components/InputPassword'
import './style.css'

export default function Login() {
    return (
        <>
            <HeaderClient/>
            <main>
                <section id="login-section" className="dsc-container">
                    <div className="dsc-login-form-container">
                        <form className="dsc-card dsc-form">
                            <h2>Login</h2>
                            <div className="dsc-form-controls-container">
                                <InputEmail/>
                                <InputPassword/>
                            </div>
                            <ButtonSubmit/>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}