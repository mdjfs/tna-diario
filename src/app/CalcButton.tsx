'use client';

export default function CalcButton () {

    function calc() {
        if(typeof document === 'object' && document) {
            const inputMonto = document.getElementById('monto') as any
            const inputTna = document.getElementById('tna') as any
            const monto = parseFloat(inputMonto.value);
            const tna = parseFloat(inputTna.value);
            const tnaDiario = ((tna / 365) / 100) * monto; // Dividido por 365 días
            const result = document.getElementById('resultado') as any
            result.innerText = `El interés diario con un TNA de ${tna}% para un monto de $${monto.toFixed(2)} es de: $${tnaDiario.toFixed(2)} pesos`;
        }
    }

    return <button onClick={calc}>Calcular</button>
}