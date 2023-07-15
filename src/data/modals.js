const Modals = {
    "watcher": {
        title: "LOCK BIOFUEL",
        className: "modal-1",
        content: (
            <div style={ { color: "white" } }>
                <p>A habilidade do Watcher é o LOCK BIOFUEL.</p>
                <p>Custa: 5🧪 Desfere: 6🗡️</p>
                <p>LOCK BIOFUEL bloqueia o uso do Bio Combustível do oponente na sua próxima rodada.</p>
                <br></br>
                <p><i>LOCK BIOFUEL possui 25% de chance de ocorrer.</i></p>
            </div>
        ),
        height: "50vh",
        width: "50vw",
        backgroundColor: 'darkblue',
        headerBackgroundColor: 'blue',
        textFontSize: 18,
        textColor: 'white',
        hasCloseButton: true,
        closeOnOutsideClick: true
    },
    "strider": {
        title: "STUN",
        className: "modal-2",
        content: (
            <div style={ { color: "white" } }>
                <p>A habilidade do Strider é o STUN.</p>
                <p>Custa: 5🧪 Desfere: 5🗡️</p>
                <p>STUN impede que o oponente faça qualquer ação na sua próxima rodada.</p>
                <br></br>
                <p><i>STUN possui 25% de chance de ocorrer.</i></p>
            </div>
        ),
        height: "50vh",
        width: "50vw",
        backgroundColor: 'darkblue',
        headerBackgroundColor: 'blue',
        textFontSize: 18,
        textColor: 'white',
        hasCloseButton: true,
        closeOnOutsideClick: true
    },
    "scrapper": {
        title: "DAMAGE BIOFUEL",
        className: "modal-3",
        content: (
            <div style={ { color: "white" } }>
                <p>A habilidade do Scrapper é o DAMAGE BIOFUEL.</p>
                <p>Custa: 5🧪 Desfere: 6🗡️</p>
                <p>DAMAGE BIOFUEL danifica o container de Bio Combustível do oponente, fazendo-o perder 5 pontos de energia.</p>
                <br></br>
                <p><i>DAMAGE BIOFUEL possui 25% de chance de ocorrer.</i></p>
            </div>
        ),
        height: "50vh",
        width: "50vw",
        backgroundColor: 'darkblue',
        headerBackgroundColor: 'blue',
        textFontSize: 18,
        textColor: 'white',
        hasCloseButton: true,
        closeOnOutsideClick: true
    },
    "grazer": {
        title: "DISABLE ATTACK",
        className: "modal-4",
        content: (
            <div style={ { color: "white" } }>
                <p>A habilidade do Grazer é o DISABLE ATTACK.</p>
                <p>Custa: 5🧪 Desfere: 5🗡️</p>
                <p>DISABLE ATTACK impede que o oponente realize um ataque normal na próxima rodada.</p>
                <br></br>
                <p><i>DISABLE ATTACK possui 25% de chance de ocorrer.</i></p>
            </div>
        ),
        height: "50vh",
        width: "50vw",
        backgroundColor: 'darkblue',
        headerBackgroundColor: 'blue',
        textFontSize: 18,
        textColor: 'white',
        hasCloseButton: true,
        closeOnOutsideClick: true
    }
}

export default Modals
