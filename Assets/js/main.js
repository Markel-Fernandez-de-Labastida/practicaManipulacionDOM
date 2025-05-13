const arrImagenes = [`https://images.pexels.com/photos/29765797/pexels-photo-29765797/free-photo-of-plano-plano-de-camara-vintage-rosa.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, `https://images.pexels.com/photos/31407301/pexels-photo-31407301/free-photo-of-montanero-solitario-explorando-un-pico-nevado-al-atardecer.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, `https://images.pexels.com/photos/31048554/pexels-photo-31048554.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`, 'https://images.pexels.com/photos/28309193/pexels-photo-28309193.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', `https://images.pexels.com/photos/27370962/pexels-photo-27370962/free-photo-of-mar-amanecer-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load`];

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

const pintarBanner = () => {
    // Imagen en el header
    let randomImage = Math.floor(Math.random() * arrImagenes.length);
    console.log(randomImage);
    let imgSeleccionada = arrImagenes[randomImage];
    console.log(imgSeleccionada);

    const h1 = document.createElement("H1");
    h1.innerHTML = `Bienvenidos`;

    const header = document.querySelector(`HEADER`);

    const imgHeader = document.createElement("IMG");
    imgHeader.setAttribute("src", imgSeleccionada);
    header.append(h1);
    header.append(imgHeader);
}


// tarjetas de la galeria
const section = document.querySelector("SECTION");


const div = document.createElement("DIV");
div.classList.add("tarjetaTitulo");


pintarBanner();