import { ReusableTitle } from "./Reusableitle"


export const Experience = () => {
    return (
        <div className="w-full h-screen px-6.5 py-9 flex flex-col items-center justify-around">
            <ReusableTitle text="Experience"/>

            <div className="w-full flex flex-col items-start">
                <div>
                    <div className="font-normal text-[20px]">Sistema de Cadastro de Alunos</div>
                    <div className="font-normal text-[12px]">Projeto MatchPoint / Nov 2025 - Dec 2025</div>
                </div>
                <ul className="px-10 list-disc mt-4 flex flex-col gap-4">
                    <li>
                        Back-End feito com NodeJs e Expess para cadastrar, editar, deletar e listar os alunos 
                        cadastrados.
                    </li>
                    <li>
                        Banco de dados foito com postgreSQL e Docker para armazenar os dados dos alunos cadastrados.
                    </li>
                    <li>
                        Front-End feito com ReactJS para consumir a API e mostrar os dados dos alunos cadastrados.
                    </li>
                </ul>
            </div>
        </div>
    )
}