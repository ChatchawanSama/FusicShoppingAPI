"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
let CustomersService = exports.CustomersService = class CustomersService {
    constructor() {
        this.customers = [
            {
                id: 1,
                email: 'travis@hotmail.com',
                name: 'Travis Scott'
            },
            {
                id: 2,
                email: 'fusic@hotmail.com',
                name: 'Fusic'
            },
            {
                id: 3,
                email: 'black.adam@hotmail.com',
                name: 'Black Adam'
            },
        ];
    }
    findCustomerById(id) {
        return this.customers.find((user) => user.id === id);
    }
    getCustomers() {
        return this.customers;
    }
    createCustomer(customerDto) {
        const newCustomer = {
            id: this.customers.length + 1,
            email: customerDto.email,
            name: customerDto.name
        };
        this.customers.push(newCustomer);
        return { status: 'success', message: 'Customer created', customer: newCustomer };
    }
};
exports.CustomersService = CustomersService = __decorate([
    (0, common_1.Injectable)()
], CustomersService);
//# sourceMappingURL=customers.service.js.map