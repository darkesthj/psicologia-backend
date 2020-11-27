/*
    Rutas de Usuarios / Categoria
    host + /api/categoria
*/ 

const { Router } = require( 'express' );
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const router = Router();

const { mostrarCategoria, crearCategoria, updateCategoria } = require('../controllers/categoria');


router.get('/categorias', mostrarCategoria);

router.post('/new',
    [
        check('nombre_categoria',"El nombre es requerido").not().isEmpty(),
        validarCampos
    ], 
crearCategoria);

router.put('/update',
    [
        check('nombre_categoria',"El nombre es requerido").not().isEmpty(),
        validarCampos
    ], 
updateCategoria);

// router.put(
//         '/update',
//         [// middlewares
//             check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
//             validarCampos
//         ],
//         modificarUsuario );
// router.put(
//             '/update-user',
//             [// middlewares
//                 check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
//                 check( 'password', 'El password es requerida' ).isLength({ min: 6 }),
//                 validarCampos
//             ],
//             modificarUser );

// router.delete(
//     '/delete',
//     [// middlewares
//         check( 'persona_id', 'La persona es requerida' ).not().isEmpty(),
//         validarCampos
//     ],
//     DeleteUsuario
// )

// router.post('/',
//     [
//         check( 'email', 'El email es obligatorio' ).isEmail(),
//         check( 'password', 'El password debe de ser de 6 caracteres' ).isLength({ min: 6 }),
//         validarCampos
//     ],
//     loginUsuario);

// router.get('/renew', revalidarToken);


module.exports = router; 

