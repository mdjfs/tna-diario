import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CalcButton from './CalcButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Calculadora TNA Diario Argentina: Calcula Interés Diario en Pesos',
  description: 'Calcula fácilmente el interés diario en pesos argentinos utilizando nuestra calculadora de TNA (Tasa Nominal Anual). Ingresa el monto en pesos y el porcentaje de TNA para obtener el resultado al instante. ¡Haz tus cálculos financieros de forma rápida y precisa!',
}

export default function Home() {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="calculator">
        <h1>Calculadora TNA Diario Argentina</h1>
        <div className="input-group">
          <label htmlFor="monto">Monto en pesos:</label>
          <input type="number" id="monto" placeholder="Ingrese el monto en pesos (Ej. 5000)"/>
        </div>
        <div className="input-group">
          <label htmlFor="tna">Porcentaje de TNA:</label>
          <input type="number" id="tna" placeholder="Ingrese el porcentaje de TNA (Ej. 80)"/>
        </div>
        <CalcButton />
        <div id="resultado"></div>
      </div>
      </body>
    </html>
  )
}
