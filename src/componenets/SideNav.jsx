import { useContext } from "react";
import { categories } from "../constants";
import { YouTubeContext } from "../context/youTubeContext";

const SideNav = () => {
  // abone olma
  const { selected, setSelected, toggleButton } = useContext(YouTubeContext);

  return (
    <div className="flex flex-col p-4">
      {categories.map((i, index) => (
        <div
          // tıklanınca tipi category olan seçenekleri context'e aktarır
          onClick={() => {
            if (i.type !== "menu") {
              setSelected(i);
            }
          }}
          key={index}
        >
          <div
            //   seçili category'nin ismi ekrana bastığımınkiyle eşleşirse arka planını değiştir
            className={
              toggleButton
                ? `${
                    selected.name === i.name && "bg-[#3D3D3D]"
                  } flex items-center gap-2 p-2 py-3 text-base md:text-lg rounded-[10px] cursor-pointer transition hover:bg-[#3D3D3D]`
                : `${
                    selected.name === i.name && "bg-[#3D3D3D]"
                  } flex items-center gap-2 p-2 py-3 text-base md:text-[25px] rounded-[10px] cursor-pointer transition hover:bg-[#3D3D3D]`
            }
          >
            {i.icon}
            <span className={toggleButton ? "" : "hidden"}>{i.name}</span>
          </div>

          {i.divider && <hr />}
        </div>
      ))}
    </div>
  );
};

export default SideNav;
