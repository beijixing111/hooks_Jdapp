const style = {
  padding: "10px 0",
  textAlign: "center",
  color: "#888",
  fontSize: 14,
} as const;

const Loading = ({ loadingHtml }: { loadingHtml?: JSX.Element }) => {
  return loadingHtml ? loadingHtml : <p style={style}>拼命加载中···</p>;
};

export default Loading;
