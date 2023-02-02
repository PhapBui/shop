import MenuList from "../components/MenuList.jsx";

const data = {
  items: [
    {
      link: "/khuyen-mai/ban-hang-cung-tiki",
      icon_url:
        "https://salt.tikicdn.com/cache/100x100/ts/upload/08/2f/14/fd9d34a8f9c4a76902649d04ccd9bbc5.png.webp",
      text: "Ban hang cung Tiki",
    },
  ],
};
function TikiSeller() {
  return <MenuList data={data} />;
}

export default TikiSeller;
