import { verifyToken } from "./token.middleware.js"
import { Router } from "express"; 

const router = Router();
 /*
const generalRouters =[ 
    {path: '/producto' , route : verifyToken}
];

generalRouters.forEach((route) => {
    router.use(route.path, route.route);
});
 */
export default router;