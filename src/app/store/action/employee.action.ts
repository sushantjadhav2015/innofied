import { Employee } from "src/app/modules/employee-details/employee.model";

export class GetEmployee{
    static readonly type ='[Employee] Get'
    // TODO here is no argument passed in get so no need to add constructor
}

export class SearchEmployee {
    static readonly type ='[Employee] Search';
    constructor(public id:number){}
}

// export class AddEmployee{
//     static readonly type = '[Employee] Add';
//     constructor(public payload:any){}
// }

// export class UpdateEmployee{
//     static readonly type ='[Employee] Update'
// }

// export class DeleteEmployee{
//     static readonly type ='[Employee] Delete'
// }



