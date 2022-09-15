export default async function (period) {
  try {
    let data = [];
    const res = await fetch("./data.json");
    if (!res.ok) throw Error("Data not loaded");

    const json = await res.json();

    json.forEach((e) => {
      data.push({
        title: e.title,
        timestamps: e.timeframes[period],
      });
    });

    return data;
  } catch (err) {
    console.log(err);
  }
}
