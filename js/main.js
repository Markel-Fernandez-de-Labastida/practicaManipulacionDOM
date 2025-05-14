const arrImagenes = [ 
    { imagen: `https://images.pexels.com/photos/29765797/pexels-photo-29765797/free-photo-of-plano-plano-de-camara-vintage-rosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, alt: `imagen 1`},
    { imagen: `https://images.pexels.com/photos/31407301/pexels-photo-31407301/free-photo-of-montanero-solitario-explorando-un-pico-nevado-al-atardecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, alt: `imagen 2`}, 
    { imagen: `https://images.pexels.com/photos/31048554/pexels-photo-31048554.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, alt: `imagen 3`},
    { imagen: 'https://images.pexels.com/photos/28309193/pexels-photo-28309193.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', alt: `imagen 4`},
    { imagen: `https://images.pexels.com/photos/27370962/pexels-photo-27370962/free-photo-of-mar-amanecer-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, alt: `imagen 5`}];

const arrGaleria = [
    {
        titulo: `Teatro de Chicago`,
        imagen: `https://images.pexels.com/photos/30773894/pexels-photo-30773894/free-photo-of-teatro-de-chicago-de-noche-con-luces-de-neon.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, nam. Aliquid tempore, facilis aliquam earum rem, dolorum maxime velit, ex optio illum sed doloribus. Esse voluptates reprehenderit tempore minima earum!`
    },
    {
        titulo: `Casa/Templo asiatico.`,
        imagen: `https://images.pexels.com/photos/31008028/pexels-photo-31008028/free-photo-of-otono-en-kinkaku-ji.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus rem necessitatibus ea totam aliquid similique corrupti perspiciatis adipisci? Dicta voluptate atque debitis veritatis cupiditate. Aperiam facilis velit enim pariatur quidem.`
    },
    {
        titulo: `Noria.`,
        imagen: `https://images.pexels.com/photos/31936770/pexels-photo-31936770/free-photo-of-impresionante-vista-en-blanco-y-negro-del-london-eye.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis temporibus eligendi fugiat, similique magnam omnis obcaecati quod, recusandae nisi, iste incidunt adipisci possimus aperiam! Cum fuga libero recusandae tempora odit!`
    },
    {
        titulo: `Flores.`,
        imagen: `https://images.pexels.com/photos/31834862/pexels-photo-31834862/free-photo-of-tulipanes-vibrantes-de-color-rosa-y-amarillo-en-flor.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, et. Eius eum aperiam, atque, sit accusantium inventore at nihil quas maxime perferendis ad magni ipsam impedit! Expedita vitae laborum ipsa.`
    },
    {
        titulo: `Cataratas.`,
        imagen: `https://images.pexels.com/photos/27925615/pexels-photo-27925615/free-photo-of-mar-paisaje-naturaleza-playa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque nisi quia earum eveniet, necessitatibus illum doloribus pariatur animi autem voluptatum ut, sit facilis iure accusantium dignissimos, neque dolorum hic dolorem?`
    },
    {
        titulo: 'Beach.',
        imagen: `https://images.pexels.com/photos/15224943/pexels-photo-15224943/free-photo-of-playa-agua-olas-saluda.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsam reprehenderit optio illum iste asperiores aperiam nesciunt praesentium sed facere, corporis amet odio porro pariatur dolorum omnis quaerat. Atque, nobis.`
    },
    {
        titulo: `Stairs.`,
        imagen: `https://images.pexels.com/photos/30769101/pexels-photo-30769101.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`,
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ex obcaecati consectetur molestias eius sint at laboriosam architecto, quia, quae magnam voluptatum corporis doloremque dolor veritatis quaerat delectus modi aliquam.`
    },
];

const numeroAleatorio = (cantidad) => {
    return Math.floor(Math.random() * cantidad);
}

const pintarBanner = () => {
    // Imagen en el header

    let randomNumber = numeroAleatorio(arrImagenes.length);
    let imgSeleccionada = arrImagenes[randomNumber].imagen;
    console.log(imgSeleccionada);

    const header = document.querySelector(`HEADER`);

    const titulo = document.createElement("H1");
    titulo.innerHTML = `Bienvenidos`;

    const div = document.createElement("DIV");

    const imgHeader = document.createElement("IMG");
    imgHeader.setAttribute("src", imgSeleccionada);
    imgHeader.setAttribute("alt", arrImagenes[randomNumber].alt);
    header.append(titulo);
    div.append(imgHeader);
    header.append(div);
}


// tarjetas de la galeria
/* h2
                 div  -> aqui usar el flex
                    div -> cards
                        div -> contenedor de la imagen
                            img
                        h3  -> titulo de la card
                        p   -> descripcion de la card
*/
const section = document.querySelector("SECTION");
const h2 = document.createElement("H2");
const div_flex = document.createElement("DIV");
h2.innerHTML = `Recomendados`;
section.append(h2);

const pintarCards = () => {
    arrGaleria.forEach((item, index, array) => {
        console.log(item.titulo);
        console.log(item.imagen);
        console.log(item.description);
        
        
        
        const div_cards = document.createElement("DIV");
        const div_img = document.createElement("DIV");
        const img = document.createElement("IMG");
        const h3 = document.createElement("H3");
        const p_descripcion = document.createElement("P");

        div_flex.classList.add("cardFlex");

        div_cards.classList.add("divCards");

        div_img.classList.add("divImg");

        img.setAttribute("src", item.imagen);

        h3.innerHTML = item.titulo;
        p_descripcion.innerHTML = item.description;

        div_img.append(img);
        div_cards.append(div_img);
        div_cards.append(h3);
        div_cards.append(p_descripcion);
        div_flex.append(div_cards);
        //section.append(h2);
        h2.append(div_flex);
        section.append(div_flex);

        //div.classList.add("tarjetaTitulo");
    })
}



pintarBanner();
pintarCards();