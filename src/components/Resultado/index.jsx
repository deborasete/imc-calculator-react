import styles from './Resultado.module.css'

const Resultado = ({ imc }) => {
    if (!imc) return null;

    const classificacao = (imc) => {
        if (imc < 18.5) return 'Abaixo do peso';
        if (imc >= 18.5 && imc < 24.9) return 'Peso normal';
        if (imc >= 25 && imc < 29.9) return 'Sobrepeso';
        if (imc < 34.9) return "Obesidade Grau 1";
        if (imc < 39.9) return "Obesidade Grau 2";
        return "Obesidade Grau 3";
    };

    return (
        <div className={styles.result}>
            <h2>Seu IMC: {imc}</h2>
            <p>Classificação: {classificacao(imc)}</p>
        </div>
    );
};

export default Resultado;