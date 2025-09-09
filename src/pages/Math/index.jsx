import './style.css'
import { useEffect, useState } from "react";
import { getMath } from '../../api/functions'; 


// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Home(){

  const [conteudo, setConteudo] = useState(<>...carregando...</>);

  // const elementButtonMath = document.getElementById("math-button");
  // elementButtonMath.addEventListener('click',()=>{
  //     alert(inputGetMath());
  // });
  async function PegaConteudo() {
    const retornaFato = await getMath(inputGetMath());
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
            <main>
              <div class="example">
                <h2>Math</h2>
                <input type="number" id="math-number" placeholder="Numero aqui" />
                <button id="math-button">Get Math Fact</button>
                <div id="math-result" class="api-result"></div>
                  <div>
                    <div>
                     {conteudo}
                    </div>
                  </div>
                </div>
            </main>
        </>
    )
}
function inputGetMath(){
  const inputNumber = document.getElementById("math-number").value;
  return inputNumber;
}

// const elementButtonMath = document.getElementById("math-button");
// elementButtonMath.addEventListener('click',()=>{
//     alert(inputGetMath());
// });
export default Home;