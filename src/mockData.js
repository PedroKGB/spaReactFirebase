import promouno from "../src/fotos/promo (1).jpg";
import promodos from "../src/fotos/promo (2).jpg";
import promotres from "../src/fotos/promo (3).jpg";
import promocuatro from "../src/fotos/promo (4).jpg";

const mockData = [
    {
        src: promouno,
        title: "Combo para ellos",
        description: "Combo para parejas 1: Hydrafacial, masaje relajante, mani yp edi, semipermanente Combo para parejas 2: limpieza facial, masaje relajante, mani y pedi, pediluvio",
        price: "50",
        notAvailablestart: new Date(2023,2, 5).getTime(),
        notAvailableend: new Date(2023,2, 5).getTime(),


    },
    
    {
        src: promodos,
        title: "Nutricion",
        description: "Pierde medidas y peso a base de una dietra rica en nutrientes",
        price: "40",
        notAvailablestart: new Date(2023,2, 5).getTime(),
        notAvailableend: new Date(2023,2, 10).getTime(),
    },

    {
        src: promotres,
        title: "Botox",
        description: "Mini facial, Microdermoabrasion, Plasma Rico en Plaquetas +50 unidades de botox",
        price: "20",
        notAvailablestart: new Date(2023,2, 1).getTime(),
        notAvailableend: new Date(2023,2, 2).getTime(),
    },

    {
        src: promocuatro,
        title: "DETOX",
        description: "Combo 1: 2 Drenajes Linfaticos, 2 Pediluvio, 1 Exfoliacion Corporal. Combo 2: 6 sesiones de masaje recutivo con Maderoterapia",
        price:  "30",
        notAvailablestart: new Date(2023,2, 9).getTime(),
        notAvailableend: new Date(2023,2, 10).getTime(),
    },


]

export default mockData;