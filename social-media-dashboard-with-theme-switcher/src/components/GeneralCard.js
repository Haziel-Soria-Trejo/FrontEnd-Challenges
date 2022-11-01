import Arrow from "./Arrow";

export default function GeneralCard({ data }) {
  const name = data.socialNetworkName
  const followers = data.followersToday
  return (
    <div className="general-card card">
      <div className={`card-header ${name}-header`}></div>
      <div className="card-profile">
        <span>
          <img
            src={`${process.env.PUBLIC_URL}/images/icon-${name}.svg`}
            alt={`${name}-icon`}
          />
        </span>
        <p>
          <small>{data.username}</small>
        </p>
      </div>
      <section className="flwrs-section">
        <h3>{followers%1000!==0?followers:`${followers/1000}K`}</h3>
        <p style={{letterSpacing:".2rem",fontSize:".8rem"}}>{name==='youtube'?'SUBSCRIBERS':"FOLLOWERS"}</p>
        <Arrow number={data.difference} symbol=' Today'/>
        </section>
    </div>
  );
}
