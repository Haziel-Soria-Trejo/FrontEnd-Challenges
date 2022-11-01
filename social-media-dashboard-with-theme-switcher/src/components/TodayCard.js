import Arrow from "./Arrow";

export default function TodayCard({ data }) {
  const number = data.number
  return (
    <div className="today-card card">
      <section>
        <p>
        <small>{data.action}</small>
      </p>
      <span>
        <img
          src={`${process.env.PUBLIC_URL}/images/icon-${data.socialNetworkName}.svg`}
          alt={`${data.socialNetworkName}-icon`}
        />
      </span>
      </section>
      <section>
      <p className="today-number">{number%1000!==0?number:`${number/1000}K`}</p>
      <Arrow number={data.difference_percentage} symbol="%" />
      </section>
    </div>
  );
}
