import './style.css'
import HeaderAdmin from "../../components/HeaderAdmin";
import InputName from '../../components/InputName';
import InputPreco from '../../components/InputPreco';
import InputImage from '../../components/InputImage';
import Select from '../../components/Select';
import Textarea from '../../components/Textarea';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonSave from '../../components/ButtonSave';

export default function AdminForm() {
    return (
        <>
            <HeaderAdmin />
            <main>
                <section id="product-form-section" className="dsc-container">
                    <div className="dsc-product-form-container">
                        <form className="dsc-card dsc-form">
                            <h2>Dados do produto</h2>
                            <div className="dsc-form-controls-container">
                                <InputName/>
                                <InputPreco/>
                                <InputImage/>
                                <Select/>
                                <Textarea/>
                            </div>

                            <div className="dsc-product-form-buttons">
                                <ButtonCancel/>
                                <ButtonSave/>
                            </div>
                        </form>
                    </div>
                </section>
            </main>
        </>
    )
}