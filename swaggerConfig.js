import swaggerJSDoc from 'swagger-jsdoc';

const options={
    definition:{
        openapi:'3.0.0',//specification ( OpenAPI version)
        info:{
            title:'HOLIDAY-PLANNER ',
            version:'1.0.0',
            description:'API documentation for my Node.js application called HOLIDAY-PLANNERE'
        },
    },
    apis:['./src/routes/*.js'],
}

export const swaggerSpec=swaggerJSDoc(options);

// module.exports=swaggerSpec;