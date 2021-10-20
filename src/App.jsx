import { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";

function App() {
    const [linha1, setlinha1] = useState("");
    const [linha2, setlinha2] = useState("");
    const [imagem, setImagem] = useState("");

    const onChangeLinha1 = (e) => {
        setlinha1(e.target.value);
    };

    const onChangeLinha2 = (e) => {
        setlinha2(e.target.value);
    };

    const onChangeImagem = (e) => {
        setImagem(e.target.value);
    };

    const onClickExportar = (e) => {
        html2canvas(document.querySelector("#divImage")).then((canvas) => {
            var img = canvas.toDataURL("image/png");
            var link = document.createElement("a");
            link.download = "meme.png";
            link.href = img;
            link.click();
        });
    };

    return (
        <div className="App">
            {/* Select picker de memes */}
            <select onChange={onChangeImagem}>
                <option value="">Selecione</option>
                <option value="fire">Casa em chamas</option>
                <option value="futurama">Futurama</option>
                <option value="matrix">Matrix</option>
                <option value="smart">Smart</option>
            </select>
            <input type="text" placeholder="Linha 1" onChange={onChangeLinha1} />
            <input type="text" placeholder="Linha 2" onChange={onChangeLinha2} />

            <button onClick={onClickExportar}>Exportar</button>
            <div id="divImage" className="divMeme" style={{ backgroundImage: `url("/img/${imagem}.jpg")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0" }}>
                <span className="labelMeme">{linha1}</span>
                <span className="labelMeme">{linha2}</span>
            </div>
        </div>
    );
}

export default App;
