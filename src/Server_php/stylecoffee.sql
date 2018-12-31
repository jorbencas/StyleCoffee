CREATE DATABASE 'stylecoffee';

CREATE table 'users'(
    "_id" : ObjectId("5b255ce0ae498f3c9d1ccf2e"),
        "id" : -569872639,
        "username" : "Jorge",
        "email" : "jorbencas@gmail.com",
        "role" : "user",
        "salt" : "b3b681826030c8d7c856fb55d8141a20",
        "hash" : "fb6e3db4360ab9717360e37535cfde7796e0dfd0eea43c91c70b58d3716e5cacb5b2cd1fd1ac4a4434a38b86fe7b21287bc9accd261557ecc3de5a969830c1b0ff47f0ee022e8841216929499c207870dfadc76abc6eeb424934bae2e2f9416df95ec859e77881e597881f0c0bc5a21190bb18507754e44d909879356e968800e33709747ab8168979bb45bffd0fc5bd5f99313f1d21cf22afc494d45326fb37bef5861a5ce27a12337d6107ece4e600ec4376e8958e586880d2ba8d13fb81bf090e631c681a33310fdb5586170d9624e250e9fecb6200c954b86a4b5eac650bf0a2961685757118f1e845e36236b865269155ab389f78d52d8fb8e888190209cee434226f55d769c871786ee743d02381c50f81b6e54bee525c2a8adc4b0181c367b079ee7f7494c3c738b97652e843a5f93852c46d833fe2980e0df28bf102291dd1a611077521ea57cbe815be7fa973836e90541c8d577a205afde4a2c0297130e6acc6f6926f020ec263fa83e209e74032f387fe845168026726292a125dd7f47076216979e0de9c16410991a2e73736233d00e18ed54f0f01ad23f9719b0a774173d705da7fc5229cf1c857a754cc7a50fea737fd423b5e5721d51ac4d6711487fd9534251f790e6206127196cd9d001904205815d2c97718ba6f1aca1e00d09fb951de162ed55f639938ad5c4f12ab1f934dda4d23de71ac3dc3c647f1",
)
CREATE TABLE 'books'(
     "genere" : [
                "romantica"
        ],
        "price" : 19,
        "numpags" : 448,
        "stock" : 0,
        "id" : 6,
        "title" : "AL PIE DE LA MONTAÑA ",
        "image" : "https://imagessl7.casadellibro.com/a/l/t0/47/9788416327447.jpg\n",
        "description" : "En el año 1922, con la Ley Seca imperando en todo el territorio de Virginia, Bree Caser abandona su vida en Kentucky para seguir los pasos que la llevarán al infierno más aterrador. La bestia que dormía en las profundidades del hombre en quien confió ha despertado al llegar a las montañas. Huir es la única solución posible. Escapar de las garras salvajes de un maltratador para caer bajo el embrujo de los Apalaches. \nA pesar del frío que le corta la piel, el dolor y el miedo, nada puede ser peor que lo que deja atrás. Pero, ¿tendrá el destino un plan mejor para una mujer cuya vida parece marcada por la tragedia? \nCuando Harry Murphy, un granjero de Morgantown, la encuentra al borde de la muerte junto al río, entre los dos se forja un vínculo de protección y admiración mutua. Muchos son los peligros que habrá de enfrentar la pareja, que irá abriendo sus corazones a la pasión mientras se enredan en una maraña de mentiras destinada a consumirlos. \nEl amor los azotará como el viento invernal, pero tan pronto empiezan a sentirse seguros, la muerte volverá a acecharles escondida tras la sombras, al pie de la montaña. ",
        "yearpublication" : "2017",
        "author" : "ROMINA NARANJO",
        "edition" : "TITANIA",
        "languaje" : "Español",
        "state" : "Dsponiible",
        "format" : "Papel",
        "isbn" : "9788416327492",
)
CREATE TABLE 'coffees'(
     "id" : NumberLong(1),
        "name" : "Capuchino",
        "image" : "",
        "kind" : "capuchino",
        "price" : 2.25
)
CREATE TABLE 'reservas'(
     "id" : 1422943631,
        "dni" : "48608737P",
        "title" : "",
        "timestart" : "07:05",
        "timeend" : "11:52",
        "datestart" : "2018-10-20",
        "email" : "stylecoffeeall@gmail.com",
        "isbn" : "0",
        "dateend" : "2018-10-03",
)


INSERT INTO 'books' VALUES(




{
        "_id" : ObjectId("5adca5ae2a5f5e1a04ea6bff"),
        "genere" : [
                "Novla Negra",
                "Drama",
                "Accion"
        ],
        "price" : 20,
        "numpags" : 448,
        "id" : 1,
        "title" : "EL SECRETO DE LAS HERMANAS BLACKWOOD",
        "image" : "https://imagessl6.casadellibro.com/a/l/t1/46/9788416691746.jpg",
        "description" : "Julio de 1931. Lilly (9 años) vive encerrada desde que nació en el desván de su casa, Blackwood Manor, una propiedad rural dedicada a la cría de caballos. Su madre le ha inculcado que es un monstruo, y que ese encierro es una manera de protegerla. La madre, que se dice temerosa de Dios, sólo le permite una ocupación: leer la Biblia. Una vez por semana Lilly recibe la visita de su padre, que, a escondidas, le ha enseñado a leer, le lleva libros y hasta le ha regalado un gatito. Durante un viaje del padre, una noche la madre saca a Lilly y la vende a un circo; al padre le dirá que se escapó y que no sabe dónde está. Lilly, aterrada, se siente culpable: debe de ser muy mala para que su madre la castigue así. El comprador, Merrick, ahora su tutor legal, le repite que a partir de ahora su casa es el circo y que no le servirá de nada intentar escaparse: la gente, espantada al verla, la matará. Entre maltratos continuos, la deja al cuidado de su amante, Glory, la única compañía afectuosa de Lilly durante el durísimo proceso de doma a que la somete Merrick, que la destina a la sección de los fenómenos. Cada vez que Lilly se rebela, amenaza con llevarla a otra sección donde las mujeres se desnudan para los hombres, o a otra peor: el burdel.",
        "yearpublication" : "2018",
        "author" : "ELLEN MARIE WISEMAN",
        "edition" : "Boveda",
        "languaje" : "Español",
        "state" : "Disponible",
        "format" : "Papel",
        "isbn" : "9788416691746",
        "createdAt" : ISODate("2018-04-22T15:09:34.899Z"),
        "updatedAt" : ISODate("2018-04-22T15:09:34.899Z"),
        "__v" : 0
}
{
        "_id" : ObjectId("5adca5ba2a5f5e1a04ea6c00"),
        "genere" : [
                "Drama",
                "Comedia",
                "Novela Negra"
        ],
        "price" : 17,
        "numpags" : 190,
        "id" : 2,
        "title" : "ALGÚ QUE NO HI HAVIA DE SER",
        "image" : "https://imagessl3.casadellibro.com/a/l/t1/33/9788417077433.jpg",
        "description" : "Algú que no hi havia de ser és, aparentment, la història dun robatori en una petita sucursal bancària. Aquella porta folrada de la sucursal dun banc del barri de Sant Andreu es convertiria per a lErnest narrador i artífex de tot plegat i els seus còmplices en una solució de facilitat. Però aquesta vegada laventura està protagonitzada per elements inhabituals que la capgiren seguiments inesperats, persecucions frenètiques i enganys i que arrenca lhome del seu statu quo per fer-lo passar a laltra banda de la llei amb la finalitat de crear un ordre de convivència justa.",
        "yearpublication" : "2018",
        "author" : "ELLEN MARIE WISEMAN",
        "edition" : "ALREVES",
        "languaje" : "Catalán",
        "state" : "Novedad",
        "format" : "Papel",
        "isbn" : "9788417077433",
        "createdAt" : ISODate("2018-04-22T15:09:46.339Z"),
        "updatedAt" : ISODate("2018-04-22T15:09:46.339Z"),
        "__v" : 0
}
{
        "_id" : ObjectId("5b0e8f18b4611209667db8a3"),
        "genere" : [
                "Novla Negra",
                "Thriller"
        ],
        "price" : 18.99,
        "numpags" : 368,
        "stock" : 0,
        "id" : 5,
        "title" : "FALSO NUEVE",
        "image" : "https://imagessl5.casadellibro.com/a/l/t1/15/9788490569115.jpg",
        "description" : "Que el fútbol sea un deporte no implica que haya que jugar limpio. Scott Manson, entrenador de fútbol, está buscando trabajo, pero en el actual mundo del fútbol, plagado de estrellas, no le va a resultar fácil encontrarlo. El puesto de entrenador que le ofrecen en Shanghái resulta no ser sino un elaborado timo, y los del F. C. Barcelona no quieren contratarle como entrenador, sino como detective. Por lo visto, una de las estrellas del Barça ha desaparecido y Scott tiene un mes para dar con ella. Mientras sigue el rastro del futbolista desde París a Antigua, Scott se topa con hombres corruptos y con mujeres retorcidas, y descubre lo podrido que está el corazón de tan bello deporte",
        "yearpublication" : "2018",
        "author" : "PHILIP KERR",
        "edition" : "RBA LIBROS",
        "languaje" : "Español",
        "state" : "Disponible",
        "format" : "Papel",
        "isbn" : "9788490569115",
        "createdAt" : ISODate("2018-05-30T11:46:32.160Z"),
        "updatedAt" : ISODate("2018-05-30T11:46:32.160Z"),
        "__v" : 0
}
{
        "_id" : ObjectId("5b0e9082b4611209667db8a4"),
        "genere" : [
                "romantica"
        ],
        "price" : 17.9,
        "numpags" : 272,
        "stock" : 0,
        "id" : 3,
        "title" : "COMANDANTE (SERIE LA CASA BLANCA 2) ",
        "image" : "https://imagessl2.casadellibro.com/a/l/t1/92/9788416223992.jpg\n",
        "description" : "La pasión de Matt y Charlotte llega a la Casa Blanca. Nos enamoramos en la campaña electoral. Y eso solo fue el principio. Ahora él es el presidente de Estados Unidos. Y la desea. Desea su cuerpo. Su corazón. Su alma. Y le quiere a su lado. En la Casa Blanca. En esta obra, Katy Evans mezcla realidad, erotismo y romance. El resultado es pura magia.",
        "yearpublication" : "2018",
        "author" : "KATY EVANS ",
        "edition" : "PRINCIPAL DE LOS LIBROS",
        "languaje" : "Español",
        "state" : "Novedad",
        "format" : "Papel",
        "isbn" : "9788416223992",
        "createdAt" : ISODate("2018-05-30T11:52:34.093Z"),
        "updatedAt" : ISODate("2018-05-30T11:52:34.093Z"),
        "__v" : 0
}
{
        "_id" : ObjectId("5b0e919eb4611209667db8a5"),
        "genere" : [
                "romantica"
        ],
        "price" : 12.35,
        "numpags" : 288,
        "stock" : 0,
        "id" : 4,
        "title" : "SALTARÉ LAS OLAS",
        "image" : "https://imagessl2.casadellibro.com/a/l/t0/92/9788416327492.jpg",
        "description" : ". Los paisajes enmarcan escenas románticas y el alma melancólica del país acaba impregnándolo todo. \nImogen necesita alejarse de la persona que ha roto su corazón y de una familia que piensa que no es capaz de cuidarse por sí sola, desea comenzar de cero. El problema es que no sabe cómo hacerlo porque se ha dado cuenta de que en verdad no se conoce a sí misma.\nPor ello, su mejor amiga lo organizará todo para llevarla consigo hasta Irlanda, donde le espera su primer puesto de trabajo en una residencia clínica como enfermera y una habitación de alquiler en una preciosa cottage a los pies de los acantilados de Howth, que compartirá con un joven pescador.\nNadie en el pueblo esperaba que Liam regresara después de tanto tiempo, pero él también se sorprende cuando al llegar se encuentra con que su familia ha metido a una inquilina en su casa.\nMientras Imogen irá descubriéndose poco a poco con su “lista de nuevas experiencias”, su misterioso compañero de casa se volcará en ayudarla a conseguir todos sus retos, terminando por poner a prueba los sentimientos de su corazón.\nTres pacientes con mucho que aportar, un club de lectura con algo de magia y una amistad inquebrantable, enseñarán a Imogen que en la vida solo hay que saltar las olas.\n“La mejor forma de curar un corazón es rescatar a otro”",
        "yearpublication" : "2018",
        "author" : "ELENA CASTILLO CASTRO",
        "edition" : "TITANIA",
        "languaje" : "Español",
        "state" : "Novedad",
        "format" : "Papel",
        "isbn" : "9788416327492",
        "createdAt" : ISODate("2018-05-30T11:57:18.708Z"),
        "updatedAt" : ISODate("2018-05-30T11:57:18.708Z"),
        "__v" : 0
}
{
        "_id" : ObjectId("5b0e92acb4611209667db8a6"),
        "genere" : [
                "romantica"
        ],
        "price" : 19,
        "numpags" : 448,
        "stock" : 0,
        "id" : 6,
        "title" : "AL PIE DE LA MONTAÑA ",
        "image" : "https://imagessl7.casadellibro.com/a/l/t0/47/9788416327447.jpg\n",
        "description" : "En el año 1922, con la Ley Seca imperando en todo el territorio de Virginia, Bree Caser abandona su vida en Kentucky para seguir los pasos que la llevarán al infierno más aterrador. La bestia que dormía en las profundidades del hombre en quien confió ha despertado al llegar a las montañas. Huir es la única solución posible. Escapar de las garras salvajes de un maltratador para caer bajo el embrujo de los Apalaches. \nA pesar del frío que le corta la piel, el dolor y el miedo, nada puede ser peor que lo que deja atrás. Pero, ¿tendrá el destino un plan mejor para una mujer cuya vida parece marcada por la tragedia? \nCuando Harry Murphy, un granjero de Morgantown, la encuentra al borde de la muerte junto al río, entre los dos se forja un vínculo de protección y admiración mutua. Muchos son los peligros que habrá de enfrentar la pareja, que irá abriendo sus corazones a la pasión mientras se enredan en una maraña de mentiras destinada a consumirlos. \nEl amor los azotará como el viento invernal, pero tan pronto empiezan a sentirse seguros, la muerte volverá a acecharles escondida tras la sombras, al pie de la montaña. ",
        "yearpublication" : "2017",
        "author" : "ROMINA NARANJO",
        "edition" : "TITANIA",
        "languaje" : "Español",
        "state" : "Dsponiible",
        "format" : "Papel",
        "isbn" : "9788416327492",
        "createdAt" : ISODate("2018-05-30T12:01:48.708Z"),
        "updatedAt" : ISODate("2018-05-30T12:01:48.708Z"),
        "__v" : 0
}














)
INSERT INTO 'coffees' VALUES(

    
)
