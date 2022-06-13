import "bootstrap/dist/css/bootstrap.css";

export default function ListFile(props) {
  const list = props.BadgeList;

  const listitem = [];
  //  for (let x = 0; x < props.badgelist.length; x++) {
  //    listItem.push(
  //      <li className="list-group-item d-flex justify-content-between align-items-center">
  //        {props.badgelist[x][0]}
  //        <span class="badge bg-primary rounded-pill">
  //          {props.badgelist[x][1]}
  //        </span>
  //      </li>
  //    );
  //  }
  for (let i = 0; i < BadgeList.length; i++) {
    listitem.push(
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {BadgeList[i][0]}
        <span className="badge bg-primary rounded-pill">{BadgeList[i][1]}</span>
      </li>
    );
  }
  return (
    <ul className={`list-group w-50 list-group-${props.variant}`}>
      {listitem}
    </ul>
  );
}
