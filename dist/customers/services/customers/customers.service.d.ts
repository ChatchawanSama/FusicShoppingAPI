import { CreateCustomerDto } from 'src/customers/controllers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';
export declare class CustomersService {
    private customers;
    findCustomerById(id: number): Customer;
    getCustomers(): Customer[];
    createCustomer(customerDto: CreateCustomerDto): {
        status: string;
        message: string;
        customer: Customer;
    };
}
