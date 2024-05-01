import http from '../../shared/services/http-common';
export class ClientService {
    getAll() {
        return http.get('/clients');
    }
    getById(id) {
        return http.get(`/clients/${id}`);
    }
    create(data) {
        return http.post('/clients', data);
    }
    update(id, data) {
        return http.put(`/clients/${id}`, data);
    }
    delete(id) {
        return http.delete(`/clients/${id}`);
    }
    findByName(name) {
        return http.get(`/clients?name=${name}`);
    }
}