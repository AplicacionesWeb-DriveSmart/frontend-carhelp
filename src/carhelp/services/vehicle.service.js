import http from '../../shared/services/http-common';
export class VehicleService {
    getAll() {
        return http.get('/clients');
    }
}