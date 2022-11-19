import React, { forwardRef, useCallback, useState } from "react";
import { RenderProgressOrFinality } from "../../pages/api/progress";
import { CompactStats } from "../../remotion/map-response-to-stats";
import { BASE_COLOR } from "../palette";
import { backButton } from "./button";

const downloadButton: React.CSSProperties = {
  ...backButton,
  width: "100%",
  textAlign: "center",
};

const Rerender: React.FC<{
  username: string;
  downloadProgress: RenderProgressOrFinality | null;
  stats: CompactStats;
}> = ({ downloadProgress, username, stats }, ref) => {
  const [retrying, setRetrying] = useState(false);

  const retry = useCallback(async () => {
    setRetrying(true);
    const res = await fetch("/api/clear", {
      method: "POST",
      body: JSON.stringify({
        username,
      }),
    });
    (await res.json()) as RenderProgressOrFinality;
    setRetrying(false);
    window.location.reload();
  }, [username]);

  if (stats.fixedDec18Issues) {
    return null;
  }

  return (
    <div>
      <p
        style={{
          color: BASE_COLOR,
          fontFamily: "Jelle",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        We have improved your statistics since the video was last rendered. You
        can re-render it!
      </p>
      {downloadProgress !== null &&
      downloadProgress.type == "finality" &&
      downloadProgress.finality &&
      downloadProgress.finality.type === "success" ? (
        <button disabled={retrying} style={downloadButton} onClick={retry}>
          {retrying ? "Rerendering..." : "Rerender"}
        </button>
      ) : null}
    </div>
  );
};

export default forwardRef(Rerender);
