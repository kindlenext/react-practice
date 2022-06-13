export default function List(props) {
  const listItem = [];
  if (props.basiclist) {
    for (let x = 0; x < props.basiclist.length; x++) {
      listItem.push(<li className="list-group-item">{props.basiclist[x]}</li>);
    }
  } else if (props.contextuallist) {
    {
      for (let x = 0; x < props.contextuallist.length; x++) {
        listItem.push(
          <li
            className={`list-group-item list-group-item-${props.contextuallist[x][0]}`}
          >
            {props.contextuallist[x][1]}
          </li>
        );
      }
    }
  } else if (props.statelist) {
    {
      for (let x = 0; x < props.statelist.length; x++) {
        listItem.push(
          <li className={`list-group-item ${props.statelist[x][0]}`}>
            {props.statelist[x][1]}
          </li>
        );
      }
    }
  } else if (props.badgelist) {
    {
      for (let x = 0; x < props.badgelist.length; x++) {
        listItem.push(
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {props.badgelist[x][0]}
            <span class="badge bg-primary rounded-pill">
              {props.badgelist[x][1]}
            </span>
          </li>
        );
      }
    }
  }
  return (
    <div>
      <ul className={`list-group w-50 list-group-${props.variant}`}>
        {listItem}
      </ul>
    </div>
  );
}






{/* <ListFile
        list={[
          ["primary", "my name is nadia khan"],
          ["secondary", "My crush - no one"],
          ["info", "My Hobby - CHARGE & USE MOBILE ON CHARGE"],
          ["success", "MUSIC-HOLIC"],
          ["light", "NOVEL-HOLIC"],
        ]}
        variant="flush"
        StateList={[
          ["active", "GAME FVRT - BADMINTON"],
          ["", "FVRT ONLINE GAME - LUDO TITAN"],
          ["", " FVRT COLOR - WHITE & BLACK"],
          ["", "ART - UNKNOWN"],
          ["disabled", "SOCIAL- YES BUT NO"],
        ]}
        BadgeList={[
          ["Turkey", "1"],
          ["RUSSIA", "2"],
          ["PAKISTAN", "3"],
          ["INDIA", "4"],
          ["OMAN", "5"],
        ]}
      />
      <hr />
      <List
        basiclist={[
          "Web Fundamentals",
          "View source",
          "Case Study",
          "Shows",
          "Podcasts",
        ]} */}
         {/* variant=""
        contextuallist={[ */}
        {/* //   ["primary", "Web Fundamentals"],
        //   ["light", "View source"],
        //   ["dark", "Case Study"],
        //   ["info", "Shows"],
        //   ["secondary", "Podcasts"],
        // ]}
        // statelist={[ */}
        {/* //   ["active", "Web Fundamentals"],
        //   ["", "View source"],
        //   ["", "Case Study"],
        //   ["", "Shows"],
        //   ["disabled", "Podcasts"],
        // ]}
        // badgelist={[ */}
        //   ["Web Fundamentals", "14"],
        //   ["View source", "12"],
        //   ["Case Study", "11"],
        //   ["Shows", "6"],
        //   ["Podcasts", "10"],
        // ]}
      />