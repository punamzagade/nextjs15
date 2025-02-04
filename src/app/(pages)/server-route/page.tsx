import { serverSideFunction} from "@/app/utils/server-utils";
import ImageSlider from "@/app/components/ImageSlider";


export default function ServerRoutePage() {
  const result = serverSideFunction();
  return (
    <>
      <h1>Server Route {result}</h1>
      <ImageSlider />
    </>
  );
}
