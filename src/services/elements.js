import axios from "axios";
const url = "../datos/datos.json";






class ElementsService {
    //Get Posts
    static getElements() {
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                resolve(
                    res.data
                );
            } catch (error) {
                reject(error);
            }
        })
    }
}

export default ElementsService;