import Link from "next/link";
import { AbsoluteFill } from "remotion";
import { getFont } from "../remotion/font";
import { backButton } from "../src/components/button";
import { BACKGROUND_COLOR, BASE_COLOR } from "../src/palette";

getFont();

const Spinner: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        backgroundColor: BACKGROUND_COLOR,
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Jelle",
        color: BASE_COLOR,
      }}
    >
      <h1>User not found!</h1>
      <p>This doesn{"'"}t seem to be a GitHub user. Probably just a typo! </p>

      <Link href="/" passHref>
        <button style={backButton}>Try again</button>
      </Link>
    </AbsoluteFill>
  );
};

export default Spinner;
