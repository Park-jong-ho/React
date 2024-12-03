
import { useEffect } from 'react';
import supabase from './SupabaseClient';


// UserLogin 컴포넌트가 렌더링 될 시 회원가입, 로그인 후 회원 조회
const UserLogin = () => {

  const join = async () => {


    // 회원가입 API 호출
    const {data, error} = await supabase.auth.signUp({
      email:"user05@gmail.com",
      password:"1q2w3e4r5t",
    })

    if(error) {
      return(
        
      )
    }

  }
  useEffect(() => {


  }, [])
  

  //회원조회 유저 렌더링
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default UserLogin