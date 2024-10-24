import { RandomAnimalNames } from '../../../../utils/app-constants'

import React from 'react';

interface IState {
    currentIndex:number;
    displayedItems:string[];
    isLastItem:boolean;
}
const ListItems = 20;

const DefaultState:IState = {
    currentIndex:0,
    isLastItem:false,
    displayedItems:RandomAnimalNames.slice(0, ListItems)
}

export const Content = () => {

  const [state,setState] = React.useState<IState>(DefaultState)

  const modalBodyRef = React.useRef<HTMLDivElement>(null);

  const loadMoreItems = () => {
    const nextIndex = state.currentIndex + ListItems;
    const nextItems = RandomAnimalNames.slice(state.currentIndex, nextIndex);
    
    setState((prev)=>({...prev,currentIndex:nextIndex,displayedItems:[...prev.displayedItems,...nextItems]}))
  };

  const handleDelete = (itemToDelete: string) => {
    setState((prev) => ({...prev,displayedItems:prev.displayedItems.filter(item => item !== itemToDelete)}));
  };

  React.useEffect(() => {
    const handleScroll = () => {
      if (modalBodyRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = modalBodyRef.current;
        
        if (scrollTop + clientHeight >= scrollHeight) {
          loadMoreItems();
        }
      }
    };

    const modalBody = modalBodyRef.current;
    if (modalBody) {
      modalBody.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (modalBody) {
        modalBody.removeEventListener('scroll', handleScroll);
      }
    };
  }, [state.currentIndex]);

  return (
    <div ref={modalBodyRef} className='flex w-full max-w-full h-64 overflow-y-auto'>
      <ul id='itemList' className='list-inside w-full p-1'>
        {state.displayedItems.map((item, index) => (
          <li className='p-2' key={`${item}-${index}`} onClick={()=>handleDelete(item)}>
            <a href='#'>{item}</a>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

