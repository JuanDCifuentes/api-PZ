import { Router } from "express";   
import {getUsers, createUser, getUser, putUser, deleteUser} from "../controllers/user.controller.js";

const router = Router();

router.post('/', createUser );

router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

export default router;