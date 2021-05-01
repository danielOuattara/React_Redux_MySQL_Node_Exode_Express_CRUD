
import http from './../http-common.js';

class TutorialDataServices {

    getAll() {
        return http.get("/tutorials");
    }

    get(id) {
        return http.get(`/tutorials/${id}`)
    }

    create(data) {
        return http.post("/tutorials", data);
    }

    update(id, data) {
        return http.put(`/tutorial/${id}`, data);
    }

    delete(id) {
        return http.delete(`/tutorial/${id}`);
    }

    findByTitle(title) {
        return http.get(`/tutorials?title= ${title}`);
    }
}


export default new TutorialDataServices()