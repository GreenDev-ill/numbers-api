import './style.css'
import { useEffect, useState } from "react";
import { getCharacters } from "../../api/character";

// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Home(){

  const [conteudo, setConteudo] = useState(<>...carregando...</>);
  // async function PegarConteudo() { //função assÍncrona = para aguardar "await" a "response" do conteúdo da API
  //   // Vai realizar o fetch para a api do Rick and Morty - usando AXIOS
  //   // GET = pegar info, POST = adiicionar info, PUT = alterar info, DELETE = deletar info
  //   const requestOptions = {
  //     method: 'GET'
  //   }
  //   const response = await fetch(
  //     'https://rickandmortyapi.com/api/character',
  //     requestOptions
  //   ); // chama método fetch
  //   if(!response.ok){
  //     return [];
  //   }

  //   // const outro = await getCharacters(); // axios

  //   const data = await response.json();

  //   return data.results;  
  // }
  // Transforma conteudos do mock em elementos html
  async function TransformaEmLista() {
    const todosPersonagens = await getCharacters();
    return todosPersonagens.map(personagem=> //Puxa os personagens, tipo for each
      // key serve para dar um identificador para cada item html, para não dar erro no react
      <div className ='card char' key={personagem.id}> 
        <img src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <h2>{personagem.name}</h2>
        <div className = 'char-info'>
          <span><b>Espécie: </b>{personagem.species}</span>
          <span><b>Gênero: </b>{personagem.gender}</span>
        </div>
        <div>
          <div className ='lista-secundaria'>
            <b>Participações:</b>
            {/* Desafio: Traga as participações personagem.episode.map() */}
            { personagem.episode.map(
              ep => 
                  <span key={personagem.name+(ep.split('episode/'))[1]}>
                    Ep-{ (ep.split('episode/'))[1] }
                  </span>
            ) }
          </div>
          <h5><b>Status: </b>{personagem.status}</h5>
        </div>
      </div>
    );
  }
  // função "listener" que ao carregar vai transformar em lista
  useEffect(() => {
    async function carregar() {
      setConteudo(await TransformaEmLista());
    }
    carregar();
  }, []);
    return(
        <>
            <main>
                {/*Filtros */}
                <div className="lista-principal">{conteudo}</div>
            </main>
        </>
    )
}

export default Home