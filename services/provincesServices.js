
const getProvincesResponse = (body)=>{
    const province = body.queryResult.parameters.provinceName;

    let response = 'Lo siento, la provincia enviada no existe';
    const provincesOccidente = ['Pinar del Rio','Matanzas','Isla de la Juventud','Artemisa','Mayabeque'];
    const provincesCapital = ['La Habana','Habana'];
    const provincesOriente = ['Villa Clara','Cienfuegos','Sancti Spiritus','Ciego de Avila','Camaguey','Las Tunas',
    'Holguin','Granma','Santiago de Cuba','Guantanamo'];
    if(provincesOccidente.some((item)=> item.toLowerCase() === province.toLowerCase()))
        response = 'De 5 a 7 días, después de ser aprobada';
    if(provincesCapital.some((item)=> item.toLowerCase() === province.toLowerCase()))
        response = 'De 3 a 5 días, después de ser aprobada';
    if(provincesOriente.some((item)=> item.toLowerCase() === province.toLowerCase()))
        response = 'De 10 a 15 días, después de ser aprobada';

    return [{
        "text": {
            "text": [
                `${response}, ¿desea buscar otra provincia?`
            ]
        }
    }]
};

module.exports = {
    getProvincesResponse
}