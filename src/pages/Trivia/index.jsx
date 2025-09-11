import './style.css'
import { useEffect, useState } from "react";
import { getTrivia } from '../../api/functions'; 

var numeroAnterior = '';
// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Trivia(){

  const [conteudo, setConteudo] = useState(<>...carregando...</>);

  const elementButtonTrivia = document.getElementById("trivia-button");
  elementButtonTrivia?.addEventListener('click', async () => {
  if (document.getElementById("trivia-number").value !== numeroAnterior) {
    numeroAnterior = document.getElementById("trivia-number").value;
    setConteudo(await PegaConteudo());
  }
  }); 
  
  async function PegaConteudo() {
    const retornaFato = await getTrivia(inputGetTrivia());
    // console.log('retornaFato:', retornaFato);
    return retornaFato;
  }
  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      setConteudo(await PegaConteudo());
      console.log('conteudo do useEffect:', conteudo);
    }
    carregar();
  }, []);
    return(
        <>
          <div class="pai">
            <main>
              <div class="example">
                <h2>Trivia Number Fact</h2>
                <div class="inpBut-Card">
                <input type="number" id="trivia-number" placeholder="Digite um numero:" />
                <button id="trivia-button">Get Trivia Fact</button>
                </div>
                <div id="trivia-result" class="api-result"></div>
                  <div class="conteudo-card">
                    <div>
                     {conteudo}
                    </div>
                  </div>
                </div>
            </main>
          </div>
        </>
    )
}
function inputGetTrivia(){
  const inputNumber = document.getElementById("trivia-number").value;
  return inputNumber;
}

// const elementButtonMath = document.getElementById("math-button");
// elementButtonMath.addEventListener('click',()=>{
//     alert(inputGetMath());
// });
export default Trivia;