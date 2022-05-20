import React from "react";
import styles from "./users.module.css";

const Users = (props) => {
   
   if (props.users.length === 0) {
    props.setUsers([
            

      {
        id: 1,
        photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg",
        followed: false,
        fio: "Vovka",
        status: "pedovka",
        location: { city: "Spb", country: "Russia" },
      },
      {
        id: 2,
        photoUrl:
          "https://cspromogame.ru//storage/upload_images/avatars/1299.jpg",
        followed: true,
        fio: "Vladik",
        status: "Korobok",
        location: { city: "Minsk", country: "Belarus" },
      },
      {
        id: 3,
        photoUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYNzFNRWDJwmRqxpBaSx2zcdxb-Fbe2BJAQ&usqp=CAU",
        followed: true,
        fio: "Chadim",
        status: "Oven",
        location: { city: "Tokio", country: "Japan" },
      },
      {
        id: 4,
        photoUrl: "https://www.blast.hk/attachments/68493/",
        followed: false,
        fio: "Svetka",
        status: "Sg",
        location: { city: "Berlin", country: "Germany" },
      },
    ]);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} className={styles.userPhoto}></img>
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fio}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
