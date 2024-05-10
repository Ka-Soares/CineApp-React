import data from "../../articles.json"

function Home() {
    
    return ( 
        <>
        <input 
        type="text" 
        name="searchPosts" 
        id="searchPosts" 
        placeholder="Busque aqui"/>

        <div className="grid grid-cols-3 gap-3">

        {data.map((artigo, index) => (
            <div key={index}>
                <h1>{artigo.title}</h1>
                {artigo.image ? <img src={artigo.image}/>:
                "Imagem não encontrada"}               

                <div>
                    {
                     artigo.tags.map( tag =>(
                        <span key={tag}>
                            {tag}
                        </span>
                    ))}
                </div>

                <div>
                    {artigo.text.map((texto, index) => (
                            <div key={index}>
                                <p>{artigo.text}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        ))}
        </div>
        </> 
    )
}

export default Home;