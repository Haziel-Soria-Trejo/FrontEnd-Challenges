export default function Arrow({ number, symbol }) {
  return (
    <p className={number >= 0 ? "change-pos" : "change-neg"}>
      <span className="arrow-span">
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-${
            number >= 0 ? "up" : "down"
          }.svg`}
          alt=""
        />
      </span>
      {Math.abs(number)}
      {symbol}
      
    </p>
  );
}
