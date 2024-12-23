import { useState, useRef, useMemo } from "react"
import UserList from "./User";
import CreateUser from "./CreateUser";

// 활성 사용자수를 계산하는 함수
const countActiveUsers = (users) => {
  console.log("활성 사용자수 계산중..");
  return users.filter((user) => user.active).length;
};

// 활성 사용자수를 계산하는 컴포넌트
const ActiveUserCount = () => {
  const [totalUsers, setTotalUsers] = useState ([
    {
      id: 1,
      username: "test1",
      email: "test1@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "test2",
      email: "test2@gmail.com",
      active: true,
    },
    {
      id: 3,
      username: "test3",
      email: "test3@gmail.com",
      active: true,
    },
  ]);

  const [inputs, setInputs] = useState({
    ussername: "",
    email: "",
  });

  const nextId = useRef(4);

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onCreate = () => {
    console.log("oncreate 호출");

    const user = {
      id: nextId.current,
      username,
      email,
    };

    setTotalUsers(totalUsers.concat(user)); //생성한 user 추가

    setInputs({
      //input값 초기화
      username: "",
      email: "",
    });

    nextId.current += 1; //id 증가
  };

  const onRemove = (id) => {
    console.log("onRemove 호출");
    setTotalUsers(totalUsers.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    console.log("onToggle 호출");
    setTotalUsers(
      totalUsers.map(
        (user) => (user.id === id ? { ...user, active: !user.active } : user) //user id같으면 active 필드값만 변경해서 setUsers 진행
      )
    );
  };

  // const count = useMemo(() => countActiveUsers(totalUsers), [totalUsers]);
  // const count = countActiveUsers(totalUsers);
  // 활성화된 사용자 수
  // useMemo는 결과값을 캐싱해준다. -> 성능 최적화
  const count = useMemo(() => countActiveUsers(totalUsers), [totalUsers])
  return (
    <div>
      <CreateUser
        email={email}
        onChange={onChange}
        onCreate={onCreate}
        username={username}
      />

      <UserList users={totalUsers} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </div>
  );
};

export default ActiveUserCount