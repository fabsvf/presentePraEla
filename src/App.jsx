import { useState } from "react"
import ChoiceButtom from './components/botao'

export default function App() {
  const [senha, changeSenha] = useState("")
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#4a0d12]">
      <div className="w-[1000px] h-[640px] bg-[url('/png-imagem.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center">
        <div>{senha}</div>
        <h1 className="text-xl font-bold text-gray-700">A senha vai aqui</h1>
        {/* another conteiner */}
        <div className="">
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={"1"} onclick={(e) => changeSenha(e.target.senha + num)}/>
          <ChoiceButtom numero={}/>
        </div>
      </div>
      
    </div>
  )
}