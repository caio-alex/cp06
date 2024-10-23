import styled from "styled-components"

const Livros =styled.div`
    align-items: center;
    color: white;
    justify-content: center;
    text-align: center;
    border: solid 2px purple;
    padding: 10px 20px 10px 20px;
    margin: 20px;
    border-radius: 15px;
`



export const Aba = () => {
    return(
        <div className="cat">
            <Livros>
                <img/>
                <h4>Tipo de Livros1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Livros>
            <Livros>
                <img/>
                <h4>Tipo de Livros2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Livros>
            <Livros>
                <img/>
                <h4>Tipo de Livros3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </Livros>

        </div>
    )
}