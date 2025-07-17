function convertMarkdown() {
    // A função pega o conteúdo do input de Markdown
    const mdInput = document.querySelector("#markdown-input");
    let text = mdInput.value;

    // Dicionário de conversão Markdown -> HTML
    const mdToHtmlObj = {
        "#" : ["<h1>", "</h1>"],
        "##" : ["<h2>", "</h2>"],
        "###": ["<h3>", "</h3>"],
        "****": ["<strong>", "</strong>"],
        "____" : ["<strong>", "</strong>"],
        "**": ["<strong>", "</strong>"],
        "__": ["<strong>", "</strong>"],
        "*" : ["<em>", "</em>"],
        "_" : ["<em>", "</em>"],
        "[]()" : ['<a href="', '">', '</a>'],
        "![]()" : ['<img alt="', '" src="', '">'],
        ">" : ["<blockquote>", "</blockquote>"]
    };

    /* 
        .replace(regex, function)
        O segundo argumento aqui é uma função *callback*:
        Isso significa que essa função será chamada automaticamente
        para cada match (ocorrência) do regex.

        A função recebe como primeiro argumento o match completo,
        e depois os grupos capturados entre parênteses.

        A gente usa (_ , p1) para dizer: "ignore o primeiro argumento (match)"
        e use só o grupo capturado (p1). O underline "_" é uma convenção
        para indicar que o valor está sendo ignorado.
    */

    // TÍTULOS

    // ### título -> <h3>título</h3>
    text = text.replace(/^### (.*)$/gm, (_, p1) =>
        `${mdToHtmlObj["###"][0]}${p1}${mdToHtmlObj["###"][1]}`);
    // Regex:
    // ^     => início da linha
    // ###   => exatamente três hashtags
    // espaço
    // (.*)  => captura todo o resto da linha
    // $     => fim da linha
    // g     => global (pega todos)
    // m     => multiline (trata cada linha separadamente)

    // ## título -> <h2>título</h2>
    text = text.replace(/^## (.*)$/gm, (_, p1) =>
        `${mdToHtmlObj["##"][0]}${p1}${mdToHtmlObj["##"][1]}`);
    // Mesma lógica do anterior, só que com duas hashtags

    // # título -> <h1>título</h1>
    text = text.replace(/^# (.*)$/gm, (_, p1) =>
        `${mdToHtmlObj["#"][0]}${p1}${mdToHtmlObj["#"][1]}`);
    // Mesma lógica, com uma hashtag só

    // NEGRITO

    // **texto** -> <strong>texto</strong>
    text = text.replace(/\*\*(.*?)\*\*/g, (_, p1) =>
        `${mdToHtmlObj["**"][0]}${p1}${mdToHtmlObj["**"][1]}`);
    // Regex:
    // \*\*     => dois asteriscos (escapados com \)
    // (.*?)    => captura o menor conteúdo possível entre eles (lazy match)
    // \*\*     => fecha com dois asteriscos
    // g        => substitui todas as ocorrências

    // __texto__ -> <strong>texto</strong>
    text = text.replace(/__(.*?)__/g, (_, p1) =>
        `${mdToHtmlObj["__"][0]}${p1}${mdToHtmlObj["__"][1]}`);
    // Igual ao anterior, mas com dois underlines no lugar dos asteriscos

    // ITÁLICO

    // *texto* -> <em>texto</em>
    text = text.replace(/\*(.*?)\*/g, (_, p1) =>
        `${mdToHtmlObj["*"][0]}${p1}${mdToHtmlObj["*"][1]}`);
    // Regex:
    // \*       => um único asterisco
    // (.*?)    => captura o conteúdo entre os asteriscos (modo lazy)
    // \*       => fecha com um asterisco

    // _texto_ -> <em>texto</em>
    text = text.replace(/_(.*?)_/g, (_, p1) =>
        `${mdToHtmlObj["_"][0]}${p1}${mdToHtmlObj["_"][1]}`);
    // Igual ao anterior, mas com underline simples

    // BLOCKQUOTE

    // > frase -> <blockquote>frase</blockquote>
    text = text.replace(/^> (.*)$/gm, (_, p1) =>
        `${mdToHtmlObj[">"][0]}${p1}${mdToHtmlObj[">"][1]}`);
    // Regex:
    // ^>       => início da linha seguido de símbolo >
    // espaço
    // (.*)     => captura o restante da linha
    // g, m     => global e multiline

    // IMAGENS

    // ![alt](url) -> <img alt="alt" src="url">
    text = text.replace(/\!\[(.*?)\]\((.*?)\)/g, (_, alt, src) =>
        `${mdToHtmlObj["![]()"][0]}${alt}${mdToHtmlObj["![]()"][1]}${src}${mdToHtmlObj["![]()"][2]}`);
    // Regex:
    // \!\[      => ponto de exclamação + colchete (imagem markdown)
    // (.*?)     => captura o texto alt
    // \]        => fecha colchete
    // \(        => abre parêntese
    // (.*?)     => captura a URL da imagem
    // \)        => fecha parêntese


    // LINKS

    // [texto](url) -> <a href="url">texto</a>
    text = text.replace(/\[(.*?)\]\((.*?)\)/g, (_, textPart, url) =>
        `${mdToHtmlObj["[]()"][0]}${url}${mdToHtmlObj["[]()"][1]}${textPart}${mdToHtmlObj["[]()"][2]}`);
    // Regex:
    // \[       => abre colchete
    // (.*?)    => captura o texto visível do link
    // \]       => fecha colchete
    // \(       => abre parêntese
    // (.*?)    => captura a URL
    // \)       => fecha parêntese

    // No final, a função retorna o texto já convertido em HTML
    return text;

}

const htmlOutput = document.querySelector("#html-output"); 
const preview = document.querySelector("#preview");

function updatePreview() {
    const mdToHtml = convertMarkdown();
    htmlOutput.innerText = mdToHtml; // mostra o HTML "cru"
    preview.innerHTML = mdToHtml;    // mostra o HTML interpretado
}

document.querySelector("#markdown-input").addEventListener("input", updatePreview);

// Atualiza a prévia assim que a página carrega
updatePreview();
