import axios from 'axios';

const api_url = 'http://127.0.0.1:8000/api/';


class CardService {

    getCards(){
        return axios.get(api_url + 'cards');
    }

    getCardById(card_id){
        return axios.get(api_url + 'card/' + card_id);
    }

    addCard(card){
        return axios.post(api_url + 'card', card);
    }

    updateCard(card_id, card){
        return axios.put(api_url + 'card/'+card_id , card);
    }

    deleteCard(card_id){
        return axios.delete(api_url + 'card/' + card_id);
    }
}

export default new CardService()