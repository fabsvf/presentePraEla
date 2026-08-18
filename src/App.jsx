import { useState } from "react"
import ChoiceButtom from './components/botao'

export default function App() {
  const [senha, setSenha] = useState("")

  // Recebe o número e concatena com o estado anterior
  const addSenha = (numero) => {
    setSenha((prevSenha) => prevSenha + numero)
  }

  // Remove o último caractere
  const removeSenha = () => {
    setSenha((prevSenha) => prevSenha.slice(0, -1))
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4a0d12]">
      <div className="w-[1000px] h-[640px] bg-[url('/png-imagem.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold text-gray-700">A senha vai aqui</h1>
        <p>{senha}</p>        
        <div>
          <div>
            <ChoiceButtom valor="1" onClick={() => addSenha("1")} />
            <ChoiceButtom valor="2" onClick={() => addSenha("2")} />
            <ChoiceButtom valor="3" onClick={() => addSenha("3")} />
          </div>
          <div>
            <ChoiceButtom valor="4" onClick={() => addSenha("4")} />
            <ChoiceButtom valor="5" onClick={() => addSenha("5")} />
            <ChoiceButtom valor="6" onClick={() => addSenha("6")} />
          </div>
          <div>
            <ChoiceButtom valor="7" onClick={() => addSenha("7")} />
            <ChoiceButtom valor="8" onClick={() => addSenha("8")} />
            <ChoiceButtom valor="9" onClick={() => addSenha("9")} />
          </div>
          <ChoiceButtom valor="0" onClick={() => addSenha("0")} />
          <ChoiceButtom valor="delete" onClick={removeSenha} />
        </div>
      </div>
    </div>
  )
}