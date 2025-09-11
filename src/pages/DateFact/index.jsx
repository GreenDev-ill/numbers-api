import './style.css'
import { useEffect, useState } from "react";
import { getDateFact } from '../../api/functions'; 
import { getYearFact } from '../../api/functions'; 

var numeroAnterior = '';
// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function DateFact(){

  const [conteudo, setConteudo] = useState(<>...carregando...</>);

  const elementButtonDate = document.getElementById("date-button");
  elementButtonDate?.addEventListener('click', async () => {
    if (document.getElementById("date-number").value !== numeroAnterior) {
      numeroAnterior = document.getElementById("date-number").value;
      setConteudo(await PegaConteudoDate());
    }
  }); 

  const elementButtonYear = document.getElementById("year-button");
  elementButtonYear?.addEventListener('click', async () => {
    if (document.getElementById("date-number").value !== numeroAnterior) {
      numeroAnterior = document.getElementById("date-number").value;
      setConteudo(await PegaConteudoYear());
    }
  }); 
  
  async function PegaConteudoDate() {
    const retornaFato = await getDateFact(inputGetDateFact());
    // console.log('retornaFato:', retornaFato);
    return retornaFato;
  }

    async function PegaConteudoYear() {
    const retornaFato = await getYearFact(inputGetDateFact());
    // console.log('retornaFato:', retornaFato);
    return retornaFato;
  }

  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      setConteudo(await PegaConteudoDate());
      console.log('conteudo do useEffect:', conteudo);
    }
    carregar();
  }, []);
    return(
        <>
            <div class="pai">
            <main>
              <div class="example">
                <h2>Date Number Fact</h2>

                <div class="inpBut-Card">
                <input type="date" id="date-number" placeholder="Digite um numero:" />
                <button id="date-button">Get Date Fact</button>
                <button id="year-button">Get Year Fact</button>
                </div>

                <div id="date-result" class="api-result"></div>
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
function inputGetDateFact(){
  const inputNumber = document.getElementById("date-number").value;
  return inputNumber;
}

export default DateFact;