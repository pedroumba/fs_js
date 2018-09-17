var dias = [ 'lunes', 'martes', 'miercoles', 'jueves', 'viernes']

function log(t){ console.log(t) }

for (k in dias){ log(dias[k]) }

dias.forEach(d => log(dias[k]))


var a1 = [ 'a1e1', 'a1e2']
var a2 = [ 'a2e1', 'a2e2']

var n1 = 1
var n2 = 2

var s1 = 'lunes'
var s2 = 'martes'

var b1 = false
var b2 = true

var test_array = [ n1, n2, s1, s2, b1, b2, a1, a2 ]


log(test_array)
log(a1)
log(a2)


var aa2 = [ 'aa3 = [1,2]', 'aa4 = [3,4]' ]
log(aa2)


var test_obj = { 
                name: 'objeto',                     // propiedad string
                apellido: 'js',                     // propiedad string

                edad: 25,                           // propiedad numerica
                cedula: 67,                         // propiedad numerica

                hombre: true,                       // propiedad boolean
                viejo: false,                       // propiedad boolean

                casas: [ 'soacha', 'boita'],        // propiedad array
                carros: [ 'bmw', 'fiat' ],          // propiedad array

                hijo1: { name: 'beto', apellido: 'js' },     // propiedad objeto
                hijo2: { name: 'damian', apellido: 'js' },     // propiedad objeto
}

log(test_obj)

document.getElementById('but1').addEventListener('click', funcDelClick)
document.getElementById('but2').addEventListener('click', funcAddClick)

function funcDelClick() 
{
    if(document.getElementById('ul1').children.length)
    {
        document.getElementById('ul1').children[0].remove()
        log('borrar li')       
    }
    else
    {
        log('Lista vacia!')
    }
}

function funcAddClick() 
{
    let t = document.getElementById('in1').value
    
    if (t)
    {
        let node = document.createElement("LI")
        let textnode = document.createTextNode(t)
        
        node.appendChild(textnode)
        document.getElementById('ul1').appendChild(node)        
    }
    else
    {
        log('Agregar texto por favor!')
    }
}





