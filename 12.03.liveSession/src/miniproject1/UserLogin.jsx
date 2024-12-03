
import { useEffect } from 'react';
import supabase from './SupabaseClient';
import { useState } from 'react';


// UserLogin 컴포넌트가 렌더링 될 시 회원가입, 로그인 후 회원 조회
const UserLogin = () => {

  const [user, setUser] = useState()

  const join = async () => {


    // 회원가입 API 호출
    const {data, error} = await supabase.auth.signUp({
      email:"user05@gmail.com",
      password:"1q2w3e4r5t",
      
    })
    console.log("data :", data);

    if(error) {
      console.error(error);
      return;
    }

  }

  const login = async () => {
    const {data, error} = await supabase.auth.signInWithPassword({
      email:"user05@gmail.com",
      password:"1q2w3e4r5t",
    })

    if(error){
      console.error(error);
      return;
    }

    console.log("data :", data);
  }
  //회원 조회
  const getUserInfo = async () => {
    console.log("getUserInfo 호출");
    const {data} = await supabase.auth.getUser()
    console.log("data :", data);
    setUser(data.user.email)
  }


  useEffect(() => {
    // 회원가입 함수 호출
    join();
    // 로그인 함수 호출
    login();
    // 회원 조회 함수 호출
    getUserInfo();

  }, [])
  

  //회원조회 유저 렌더링
  return (
    <>
      <div>
        로그인한 유저 Email : {user}
      </div>
    </>
  )
}

export default UserLogin