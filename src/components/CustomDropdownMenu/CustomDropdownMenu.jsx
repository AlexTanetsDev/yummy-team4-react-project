import { tick } from "images";
import { DropdownButton, DropdownMenu, DropdownItem,  ImageTick} from "./CustomDropdownMenu.styled";


export const CustomDropdownMenu = ({handleOptionClick, isOpen, setIsOpen, selectedOption})  =>{
    return (
      <div>
        <DropdownButton type="button" onClick={() => setIsOpen(!isOpen)} >
        {selectedOption}
        <ImageTick src={tick} alt="tick" />
        </DropdownButton>
        
        <DropdownMenu isOpen={isOpen}>
        <DropdownItem onClick={() => handleOptionClick('Title')}>
          Title
        </DropdownItem>
        <DropdownItem onClick={() => handleOptionClick('Ingredient')}>
          Ingredient
        </DropdownItem>
          {/* <DropdownItem href="#" value="title">Title</DropdownItem>
          <DropdownItem href="#" value="ingredient">Ingredients</DropdownItem> */}
        </DropdownMenu>
      </div>
    );
  }