export default function App() {
  return (
    // CONTÊINER PRINCIPAL (O "segundo background")
    // min-h-screen: ocupa toda a altura da tela
    // flex items-center justify-center: centraliza o conteúdo perfeitamente no meio
    // bg-[#4a0d12]: uma cor de fundo vermelho escuro (você pode trocar depois)
    <div className="min-h-screen flex items-center justify-center bg-[#4a0d12]">
      
      // O CARTÃO (O fundo de papel)
      // w-[500px] h-[350px]: definimos um tamanho fixo retangular para caber a sua imagem
      // bg-[url('/png-imagem.png')]: puxa a imagem da pasta public
      // bg-contain bg-center bg-no-repeat: garante que a imagem caiba inteira, centralizada e sem repetir
      // flex flex-col items-center justify-center: para que o futuro texto e botões fiquem no meio do papel
      <div 
        className="w-[500px] h-[350px] bg-[url('/png-imagem.png')] bg-contain bg-center bg-no-repeat flex flex-col items-center justify-center"
      >
        
        {/* Tudo que colocarmos aqui dentro depois (título, senha) vai ficar por cima do papel! */}
        <h1 className="text-xl font-bold text-gray-700">A senha vai aqui</h1>
        
      </div>
      
    </div>
  )
}