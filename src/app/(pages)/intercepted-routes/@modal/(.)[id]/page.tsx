import Image from "next/image";
import wondersImages, { WonderImage } from "../../wonders";
import Modal from "@/app/components/modal";


export default async function PageId({params}:{
    params:Promise<{id:string}>
}
){
    const {id}=await params;
    const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
    return (
      <Modal>
          <Image
            alt={photo.name}
            src={photo.src}
            className="w-full object-cover aspect-square "
          />
  
          <div className="bg-white py-4">
            <h3>{photo.photographer}</h3>
            <h3>{photo.location}</h3>
          </div>
        </Modal>
    );
  }