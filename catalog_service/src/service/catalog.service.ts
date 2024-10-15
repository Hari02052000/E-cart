import { CatalogRepositoryInterface } from "../interface/catalog.repository.interface";

export class CatalogService{

    private _repository:CatalogRepositoryInterface

    constructor(repository : CatalogRepositoryInterface){
        this._repository = repository
    }

    createProduct(input : any){}
    updateProduct(input : any){}
    getProducts(limit : number, offset :number){}
    getProduct(id : number){}
    deleteProduct(id: number){}
}