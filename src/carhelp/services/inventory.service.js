import http from '../../shared/services/http-common';

export class InventoryService {
    getAll() {
        return http.get('/spare-parts');
    }
    getById(id) {
        return http.get(`/spare-parts/${id}`);
    }
    create(data) {
        return http.post('/spare-parts', data);
    }
    update(id, data) {
        return http.put(`/spare-parts/${id}`, data);
    }
    delete(id) {
        return http.delete(`/spare-parts/${id}`);
    }
    findByTitle(name) {
        return http.get(`/spare-parts?title=${name}`);
    }
}
