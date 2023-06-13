import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/controllers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[] = [
        {
            id : 1,
            email : 'travis@hotmail.com',
            name : 'Travis Scott'
        },
        {
            id : 2,
            email : 'fusic@hotmail.com',
            name : 'Fusic'
        },
        {
            id : 3,
            email : 'black.adam@hotmail.com',
            name : 'Black Adam'
        },
    ]

    findCustomerById(id: number) {
        return this.customers.find( (user) => user.id === id);
    }

    getCustomers(){
        return this.customers;  
    }

    // createCustomer(customerDto: CreateCustomerDto){
    //     this.customers.push(customerDto);   
    //     return 200;
    // }

    createCustomer(customerDto: CreateCustomerDto) {
        const newCustomer: Customer = {
            id: this.customers.length + 1,
            email: customerDto.email,
            name: customerDto.name
        };

        this.customers.push(newCustomer);

        return { status: 'success', message: 'Customer created', customer: newCustomer };
    }
}
