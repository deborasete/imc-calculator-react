import { useEffect, useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ({ setImc }) => {
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');

    useEffect(() => {
        if (altura && peso) {
            const alturaMetros = parseFloat(altura) / 100;
            const imcCalculado = (parseFloat(peso) / (alturaMetros * alturaMetros)).toFixed(2);
            setImc(imcCalculado);
        }



    }, [altura, peso, setImc]);

    return (
        <form className={styles.form}>
            <label>
                Altura (cm):
                <input
                    type="number"
                    value={altura}
                    onChange={(e) => setAltura(e.target.value)}
                    required
                />
            </label>

            <label>
                Peso (kg):
                <input 
                    type="number"
                    value={peso}
                    onChange={(e) => setPeso(e.target.value)}
                    required
                />
            </label>
        </form>
    );
};

export default Formulario;