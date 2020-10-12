// useRef를 활용한 Component안에 변수 만들기
import React ,{useEffect} from 'react'


// function UserList(){
//     const users = [
//         {
//             id:1,
//             username:"KIM",
//             email:"1@naver.com"
//         },
//         {
//             id:1,
//             username:"PARK",
//             email:"2@naver.com"
//         },
//         {
//             id:1,
//             username:"SONG",
//             email:"3@naver.com"
//         }
//     ]
//     return (
//         <div>
//             <div><b>{users[0].username}: </b> <span>{users[0].email}</span></div>
//             <div><b>{users[1].username}: </b> <span>{users[1].email}</span></div>
//             <div><b>{users[2].username}: </b> <span>{users[2].email}</span></div>
//         </div>
//     )
// }
// onRemove함수를 만들어 배열 항목 제거 
var User = ({user , onToggle ,onRemove})=>{
    useEffect(()=>{
        console.log('user값이 나타남')
        console.log(user)
        // return ()=>{
        //     console.log('user 값이 바뀌기 전')
        //     console.log(user)
        // }
    },[])
    return (
        
            <li Key={user.id}><b style={{cursor:'pointer', color:user.active ? 'green' : 'blue'}} onClick={()=>onToggle(user.id)}>
                {user.username } : </b> 
                <span> {user.email}</span>
            <button onClick={()=>onRemove(user.id)} >삭제</button> 
            </li>
            
    )
}


function UserList({users , onToggle,  onRemove}){
    return (
        <div>
            <ul>
           {users.map(user =>(
                <User user= {user}  onRemove={onRemove} onToggle={onToggle} />
            ))
           } 
           </ul>
        </div>
    )
}

export default UserList;


