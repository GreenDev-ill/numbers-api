import './style.css'
import { useEffect, useState } from "react";
import { getDateFact } from '../../api/functions'; 


// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function DateFact(){

  const [conteudo, setConteudo] = useState(<>...carregando...</>);

  const elementButtonDate = document.getElementById("date-button");
  elementButtonDate?.addEventListener('click', async () => {
    const inputNumber = document.getElementById("date-number").value;
    if (inputNumber === '') {
      alert('Por favor, insira um número válido.');
      return;
    }else{
      setConteudo(await PegaConteudo());
    }
  }); 
  
  async function PegaConteudo() {
    const retornaFato = await getDateFact(inputGetDateFact());
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
                <h2>Date Number Fact</h2>
                <input type="number" id="date-number" placeholder="Numero aqui" />
                <button id="date-button">Get Date Fact</button>
                <div id="date-result" class="api-result"></div>
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
function inputGetDateFact(){
  const inputNumber = document.getElementById("date-number").value;
  return inputNumber;
}

// const elementButtonMath = document.getElementById("math-button");
// elementButtonMath.addEventListener('click',()=>{
//     alert(inputGetMath());
// });
export default DateFact;