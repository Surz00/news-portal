export default function AdBox({ height = 90 }) {
  const openAd = () => {
    window.open(
      "https://otieu.com/4/10400707",
      "_blank"
    );
  };

  return (
    <div
      onClick={openAd}
      className="ad-box"
      style={{
        height,
        background: "#f2f2f2",
        border: "1px dashed #aaa",
        margin: "24px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: "14px",
        color: "#444",
        fontWeight: "600",
      }}
    >
      🔴 Sponsored Advertisement
    </div>
  );
}
