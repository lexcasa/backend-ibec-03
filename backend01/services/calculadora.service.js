const Calculadora = {
    // [10, ]
    exclusion: function (v1, v2){
        let vTemp = v1.concat(v2)
        console.log(vTemp)
        let v3    = []
        let obj   = {}
        for (let i = 0; i < vTemp.length; i++){
            // Si existe el valor entonces lo deja como esta
            // Caso no exista el valor lo deja en 0
            obj[ vTemp[i] ] = obj[ vTemp[i] ] ? obj[ vTemp[i] ] : 0

            if(vTemp.includes(vTemp[i])){
                // Como ya existia el valor
                // Suma 1
                obj[ vTemp[i] ]++
            }
        }
        
        for (let key in obj){
            if(obj[key] === 1){
                v3.push(
                  parseInt( key )  
                )
            }
        }
        return v3
    },
    inclusion: function (v1, v2){
        let lim     = v1.length >= v2.length ? v1.length : v2.length
        let v3      = []
        for (let i = 0; i < lim; i++){
            if(v2.includes(v1[i]) && !v3.includes( v1[i] )){
                v3.push(v1[i])
            }
        }
        return v3
    }
}

let vect01 = [20, 10, 11]
let vect02 = [10, 15, 12]
vect01.concat(vect02)

console.log( Calculadora.exclusion(vect01, vect02), vect01.concat(vect02) )
console.log( Calculadora.inclusion(vect01, vect02) )

module.exports = Calculadora