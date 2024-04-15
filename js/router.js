export class Router {
    
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()                                  //Desativa o evento default da DOM
        window.history.pushState({}, "", event.target.href)
        this.handle()
    }

    handle() {
        const { pathname } = window.location                    //Propriedade do window que traz dados do "/"
        const route = this.routes[pathname] || this.routes[404]
        fetch(route)                                            //api do HTML - Serve para pegar alguma coisa na página. Retorna sempre uma promisse asincrona (vai tirar do jogo)
            .then(data => data.text())
            .then((html) => {
                document.querySelector("#app").innerHTML = html
            })
    } 
}


