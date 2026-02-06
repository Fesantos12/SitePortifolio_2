import { HeaderMobile } from "./HeaderMobile";


export const Header = () => {

  return (
    <>

        {/* mobile header */}

      <div className="w-full h-22.5 px-6.5 py-9 flex items-center justify-between">
        <div>Fellipe Santos</div>

        {/* dropdawn menu */}
        <HeaderMobile/>


        
        
      </div>
    </>
  )
}