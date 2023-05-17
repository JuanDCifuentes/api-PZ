import { Router } from "express";
import { createPreProject, deletePreProject, getPreProject, getPreProjects, updatePreProject } from "../controllers/preProject.controller.js";


const router = Router();

router.post('/', createPreProject );

router.get('/:id', getPreProject  );
router.get('/', getPreProjects );
router.patch('/:id', updatePreProject);
router.delete('/:id', deletePreProject );

export default router;