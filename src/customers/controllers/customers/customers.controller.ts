import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { CustomersService } from 'src/customers/services/customers/customers.service';
import { CreateCustomerDto } from '../dtos/CreateCustomer.dto';

@Controller('customers')
export class CustomersController {
    constructor(private customerService : CustomersService) {}
    @Get(':id')
    getCustomer(
        @Param('id', ParseIntPipe) id : number,  
        @Req() req: Request, 
        @Res() res: Response,)
    {
        const customer = this.customerService.findCustomerById(id);
        if(customer) {
            res.send(customer);
        }else{
            res.status(400).send({msg: 'Fuck You, Error bro!'}); 
        }
    }

    @Get('/search/:id')  
    searchCustomerById(@Param('id', ParseIntPipe) id: number){
        const customer = this.customerService.findCustomerById(id);
        if(customer) return customer;
        else throw new HttpException('Fuck you, Error bro!', HttpStatus.BAD_REQUEST)
           
    }

    @Get('')
    getAllCustomers() {
        return this.customerService.getCustomers()
    }

    @Post('create')
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        this.customerService.createCustomer(createCustomerDto);
    }
}
