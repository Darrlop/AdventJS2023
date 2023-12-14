function manufacture(gifts, materials) {

    let lista_ok = [];

    for (let element of gifts){
        const componentes = element.split('');
        console.log(componentes);
        let stock = true;
        for (let componente of componentes){
            if (materials.includes(componente)) stock = true;
            else{
                stock = false;
                break
            } 
        };
        stock === true ? lista_ok.push(element) : null;
    };

    return lista_ok;
}


const gifts = ['libro', 'ps5']
const materials = 'psli'
console.log(manufacture(gifts, materials));