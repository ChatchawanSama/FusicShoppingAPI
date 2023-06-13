import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';
export declare class CustomersController {
    private customerService;
    constructor(customerService: CustomersService);
    getCustomer(id: number, req: Request, res: Response): void;
    searchCustomerById(id: number): import("../../types/Customer").Customer;
    getAllCustomers(): import("../../types/Customer").Customer[];
    createCustomer(createCustomerDto: CreateCustomerDto): void;
}
