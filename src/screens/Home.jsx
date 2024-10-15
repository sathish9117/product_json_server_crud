import ComingSoon from "../components/comingsoon";
import { oContainer } from "../utils/utilities";

export default function Home() {
  return (
    <div className={`${oContainer} mt-[64px]`}>
      <ComingSoon />
    </div>
  );
}
