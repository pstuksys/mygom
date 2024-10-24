import React from "react";
import { Modal } from "../modal";
import { Content } from "./components/content";

export namespace NCardComponent{
    export interface IProps {
      title?:string;
      paragraph?:string;
    }
    export interface IState {
      isOpen:boolean;
    }
}

const DefaultName = `adipisicing elit`;
const DefaultTxt = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.`

export const CardComponent = (props:NCardComponent.IProps) => {
  const {title,paragraph} = props;

  const [state,setState] = React.useState<NCardComponent.IState>({isOpen:false});

  if(state.isOpen){ 
    return (
      <div className="max-w-full ">
        <Modal content={<Content/>}  onClickClose={()=>setState((prev)=>({...prev,isOpen:false}))} modalTitle="Pop N Lock"/>
      </div>);
    }

  return (
    <div className="max-w-sm overflow-hidden shadow-lg  rounded-3xl">
      <img className="w-full" src="/chosen-one/catfly.jpeg" alt="img"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title || DefaultName}</div>
        <p className="text-gray-700 text-base overflow-hidden break-words">
          {paragraph || DefaultTxt}
        </p>
      </div>
      <div className="pt-4" onClick={()=>setState((prev)=>({...prev,isOpen:true}))}>
        <button data-modal-target="static-modal" data-modal-toggle="static-modal"  type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-w-full w-full">
        Dialog window
        </button>
      </div>
  </div>
  )
}
