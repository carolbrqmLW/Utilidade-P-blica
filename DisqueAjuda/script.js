function consultar() {
    let opcao;

    opcao=parseInt(document.getElementById("txtopcao").value);

    switch(opcao) {
        case 1:
            document.getElementById("resultado").innerHTML = "Telefone: 190";
            break;

        case 2:
            document.getElementById("resultado").innerHTML = "Telefone: 193";
            break;

        case 3:
            document.getElementById("resultado").innerHTML = "Telefone: 192";
            break;
        
        case 4:
            document.getElementById("resultado").innerHTML = "Telefone: 199";
            break;
    
        case 5:
            document.getElementById("resultado").innerHTML = "Telefone: 197";
            break;

        case 6:
            document.getElementById("resultado").innerHTML = "Telefone: (21) 2332-2924";
            break;

        case 7:
            document.getElementById("resultado").innerHTML = "Telefone: (21) 2253-1177";
            break;

        case 8:
            document.getElementById("resultado").innerHTML = "Telefone: 180";
            break;

        case 9:
            document.getElementById("resultado").innerHTML = "Telefone: 100";
            break;

        case 10:
            document.getElementById("resultado").innerHTML = "Telefone: 151";
            break;

        case 11:
            document.getElementById("resultado").innerHTML = "Telefone: (21) 2332-8611";
            break;

        case 12:
            document.getElementById("resultado").innerHTML = "Telefone: (21) 3460-4040";
            break;

        case 13:
            document.getElementById("resultado").innerHTML = "Telefone: (21) 2334-7910";
            break;

            default:
            document.getElementById("resultado").innerHTML = "Opção inválida. Por favor, selecione uma opção válida.";
            break;
    }


}