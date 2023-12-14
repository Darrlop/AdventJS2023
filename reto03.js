function findNaughtyStep(original, modified) {

    let consultoria = "";
    let grande, pequenio;

    if (original === modified) return '';
    else {
        if (original.length > modified.length) {
            grande = original;
            pequenio = modified;
        } else {
            grande = modified;
            pequenio = original;
        }
        for (let ind = 0; ind < grande.length; ind++) {
            if (grande[ind] !== pequenio[ind]) {
                consultoria = grande[ind];
                break;
            }
        }
    }
    return consultoria;
}

const original = 'abcde'
const modified = 'abcde'
console.log(findNaughtyStep(original, modified));