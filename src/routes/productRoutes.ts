import isAuth from '../middlewares/isAuth';
import isAdmin from '../middlewares/isAdmin';
import { Router } from 'express';

import CreateProductService from '../services/ProductServices/CreateProduct';
import ListProductsService from '../services/ProductServices/ListProducts';
import UpdateProductService from '../services/ProductServices/UpdateProduct';
import DeleteProductService from '../services/ProductServices/DeleteProduct';

const router = Router();

router.post('/', isAuth, isAdmin,CreateProductService.execute);
router.get('/', isAuth, isAdmin, ListProductsService.execute);
router.put('/:id', isAuth, isAdmin, UpdateProductService.execute);
router.delete('/:id', isAuth, isAdmin, DeleteProductService.execute);

export default router;
