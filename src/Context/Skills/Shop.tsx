import shopify from "../../images/Shopify.png"
import woocommerce from "../../images/woocommerce.png"
import drip from "../../images/drip.png"
import billbee from "../../images/billbee.png";

const shop = {
  title: "eCommerce Platforms",
  content: [
    {
      name: "Shopify",
      imageSrc: shopify,
      imageId: "shopify",
      link: "https://www.shopify.com/",
      imgStyles: {
        width: "200px",
      },
    },
    {
      name: "WooCommerce",
      imageSrc: woocommerce,
      imageId: "WooCommerce",
      link: "https://woocommerce.com/",
    },
    {
      name: "Drip",
      imageSrc: drip,
      imageId: "Drip",
      link: "https://www.drip.com/",
      imgStyles: {
        width: "200px",
      },
    },
    {
      name: "BillBee",
      imageSrc: billbee,
      imageId: "billbee",
      link: "https://www.billbee.io/",
      imgStyles: {
        width: "200px",
      },
    },
  ],
}

export default shop
