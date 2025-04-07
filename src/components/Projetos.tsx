import ProjetosList from "./Projetos/ProjetosList";

export default function Projetos() {
    return (
            
        <section id="projetos" className="py-22 bg-black text-white scroll-mt-20">

            <div className="max-w-9/12 mx-auto flex justify-center">

                <h2 className="text-5xl"> Meus <span className="font-bold">Projetos</span> </h2>

            </div>

            <ProjetosList />

        </section>
    )
}