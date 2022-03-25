import linux from "../../images/Linux.svg";
import ubuntu from "../../images/Ubuntu.svg";
import opensuse from "../../images/OpenSUSE.svg";

const operating = {
  title: "Operating Systems",
  content: [
    {
      name: "Linux",
      imageSrc: linux,
      imageId: "linux",
      link: "https://www.kernel.org/",
      imgStyles: {
        width: "170px",
      },
    },
    {
      name: "Ubuntu",
      imageSrc: ubuntu,
      imageId: "ubuntu",
      link: "https://ubuntu.com/",
      imgStyles: {
        width: "190px",
      },
    },
    {
      name: "openSUSE",
      imageSrc: opensuse,
      imageId: "opensuse",
      link: "https://www.opensuse.org/",
      imgStyles: {
        width: "190px",
      },
    },
  ],
};

export default operating;
