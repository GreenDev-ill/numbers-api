import './style.css'
import { useEffect, useState } from "react";
import { getEpisodes } from "../../api/character";

// function Home({conteudo}){ - no caso de receber o conteudo como parametro
function Episodes(){

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
    const todosEpisodeos = await getEpisodes();
    return todosEpisodeos.map(episodeos=> //Puxa os personagens, tipo for each
      // key serve para dar um identificador para cada item html, para não dar erro no react
      <div className ='card char' key={episodeos.id}> 
        <img src={episodeos.image} alt={`Foto de ${episodeos.name}`} />
        <h2>{episodeos.name}</h2>
        <div className = 'char-info'>
          <span><b>Nome: </b>{episodeos.name}</span>
          <span><b>Episodeo: </b>{episodeos.episode}</span>
          <span><b>Data: </b>{episodeos.air_date}</span>
        </div>
        <div>
          <div className ='lista-secundaria'>
            <b>Participações:</b>
            {/* Desafio: Traga as participações personagem.episode.map()
            { episodeos.characters.map(
              ep => 
                  <span key={personagem.name+(ep.split('episode/'))[1]}>
                    Ep-{ (ep.split('episode/'))[1] }
                  </span>
            ) } */}
          </div>
          {/* <h5><b>Status: </b>{personagem.status}</h5> */}
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

export default Episodes;