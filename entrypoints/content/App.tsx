import { Button } from "@/components/ui/button";

// this what makes tailwind classes work
import "../../assets/main.css";

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export default () => {
  const handleClick = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const ele = document.querySelector("body");
    if (ele) {
      ele.style.background = getRandomColor();
    }
  };
  return (
    <div className="fixed top-0 right-0 z-[9999999] flex flex-col w-[200px] h-[400px] bg-red-100">
      <h1 className="text-center">Content Script</h1>
      <hr></hr>
      <span className="text-center">ctrl + f5 : to clear cache reload</span>
      <div className="flex justify-center">
        {" "}
        <Button onClick={handleClick} className="flex-grow-0">
          Change Color
        </Button>
      </div>
    </div>
  );
};
