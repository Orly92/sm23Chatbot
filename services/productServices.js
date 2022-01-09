const {sendGraphQLRequest} = require("./requests");
const {toolsKit} = require("./utils");

async function getProducts(productName) {
    const data = {
        query:`query($name:String!){
            products(active:"true",available:"true",id_site:37,limit:100,
              providers_active:"true",name:$name){
                id
                productName:name_product
                description:spanish_description
                code
                availableQuantity:available_quantity
                salesPrice:sales_price
                image
              }
            }`,
        variables:{
            'name':productName
        }
    };
    return await sendGraphQLRequest(data);
}

const getProductsResponse = async (req)=>{
    const body = req.body;
    const productName = body.queryResult.parameters.productName;

    if (productName == null)
        return [{
            "text": {
                "text": [
                    "Nombre incorrecto"
                ]
            }
        }];
    const products = (await getProducts(productName))['products'];

    if(products.length === 0)
        return [{
            "text": {
                "text": [
                    "No se encontraron productos con esa característica"
                ]
            }
        }];

    return toolsKit.orderBy(products, 'availableQuantity').slice(0, 5).map((product) => {
        let link = [{
            text: 'En estos momentos no hay disponibilidad del producto'
        }];
        if (product.availableQuantity > 0) {
            link = [
                {
                    text: "Ver Producto",
                    postback: `https://www.supermarket23.com/es/producto/${product.id}`
                }
            ];
        }
        return {
            card: {
                title: product.id + ': ' + product.productName,
                subtitle: product.description,
                imageUri: `https://medias.treew.com/imgproducts/middle/${product.image}`,
                buttons: link
            }
        }
    })
};

module.exports = {
    getProductsResponse
};