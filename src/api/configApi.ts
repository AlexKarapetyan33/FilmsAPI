import axios from "axios";


class ConfigAPI {
    baseUrl: string = "https://api.themoviedb.org/3"
    apiKey: string = "80d196e982f89b67f53dd31664aa627d"
    protected createBaseUrl() {
        return axios.create({
            baseURL: this.baseUrl
        })
    }
}


export { ConfigAPI }
