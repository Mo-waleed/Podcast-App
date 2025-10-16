import Card from "@/components/ui/home/card";
import Todo from "@/components/ui/home/episode";

function Main() {
  return (
    <>
    <div className="flex row-reverse max-h-screen">
       <div className="w-full max-h-screen"> <Todo /> </div>
       <div className="w-0 md:w-1/3 max-h-screen">
        <Card />
       </div>

      </div>
    </>
  )
}

export default Main;