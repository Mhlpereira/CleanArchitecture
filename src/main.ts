import { ApiExpress } from "./infra/api/express/api.express";
import { CreateProductRoute } from "./infra/api/express/routes/product/create-product.express.route";
import { ListProductRoute } from "./infra/api/express/routes/product/list-product.express.route";
import { ProductRepositoryPrisma } from "./infra/repository/product/repository.prisma";
import { prisma } from "./package/prisma/prisma";
import { CreateProductUsecase } from "./usecases/product/create";
import { ListProductUsecase } from "./usecases/product/list";

function main(){
    
    const aRepository = ProductRepositoryPrisma.create(prisma);

    const createProductUsecase =  CreateProductUsecase.create(aRepository);
    const listProductUsecase = ListProductUsecase.create(aRepository);

    const createRoute = CreateProductRoute.create(createProductUsecase);
    const listRoute = ListProductRoute.create(listProductUsecase);

    const port = 8000;

    const api = ApiExpress.create([createRoute, listRoute]);

    api.start(port);
}

main();