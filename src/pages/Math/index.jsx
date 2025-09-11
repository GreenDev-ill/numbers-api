import './style.css'
import { useEffect, useState } from "react";
import { getMath } from '../../api/functions'; 

var numeroAnterior = '';
// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Home(){
const [conteudo, setConteudo] = useState(<>...carregando...</>);


  const elementButtonMath = document.getElementById("math-button");
  elementButtonMath?.addEventListener('click', async () => {

  if (document.getElementById("math-number").value !== numeroAnterior) {
    numeroAnterior = document.getElementById("math-number").value;
    setConteudo(await PegaConteudo());
  }
    
  }); 

  async function PegaConteudo() {
    const retornaFato = await getMath(document.getElementById("math-number").value);
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
                <h2>Math Number Fact</h2>
                <div class="inpBut-Card">
                <input type="number" id="math-number" placeholder="Digite um numero:" />
                <button id="math-button">Get Math Fact</button>
                </div>
                <div id="math-result" class="api-result"></div>
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

export default Home;